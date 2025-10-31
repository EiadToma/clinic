import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { createCase } from '../redux/PatientSlice';
import SuccessToaster from '../Components/SuccessToaster';
import { useDispatch, useSelector } from 'react-redux';
import { getFaq } from '../redux/FaqSlice';

// Move constants outside component to prevent re-creation
const DRESSING_OPTIONS = ['dry', 'moist', 'green', 'has a smell', 'replace dressing out'];
const WOUND_OPTIONS = ['clean', 'dry', 'moist', 'with green', 'pus', 'infection', 'gangrene', 'slow healing'];
const MANAGEMENT_OPTIONS = ['bulky dressing', 'light dressing', 'no dressing'];

const NewCase = () => {
  const dispatch = useDispatch();
  const patientId = useSelector((state) => state.patient.patient?.id);
  const mode = useSelector((state) => state.user.Mode);
  const loading = useSelector(state => state.patient.case.isLoading);
  
  // Optimized selector - only updates when lab_tests actually changes
  const labtests = useSelector((state) => state.faq.faqData?.data.data?.lab_tests, 
    (prev, next) => JSON.stringify(prev) === JSON.stringify(next)
  );

  const [formData, setFormData] = useState({
    dressing: '',
    wound: '',
    infection: '',
    managment: '',
    lab: [''],
    file: '',
    xray: '',
    antibiotic: { text: '', type: '' },
    vitamines: [],
    anticoagulant: '',
    antiplatelet: '',
    gait: '',
    appropriate: '',
    need_customiz: false,
    customizer: '',
    comorbidities: '',
    consultations: null,
  });

    console.log(formData);
  // Memoized form update function
  const handleInputChange = useCallback((key, value) => {
    setFormData(prev => {
      // Only create new object if value actually changed
      if (prev[key] === value) return prev;
      return { ...prev, [key]: value };
    });
  }, []);

  // Optimized sendCase with useCallback
  const sendCase = useCallback(() => {
    // Prepare data without expensive operations in render
    const serializedData = {
      ...formData,
      antibiotics: JSON.stringify(formData.antibiotic),
      labratory_test_ids: JSON.stringify(formData.lab),
      vitamines: JSON.stringify(formData.vitamines),
    };

    const form = new FormData();
    Object.keys(serializedData).forEach((key) => {
      form.append(key, serializedData[key]);
    });
    
    dispatch(createCase({ patientId, form }));
  }, [formData, patientId, dispatch]);

  useEffect(() => {
    dispatch(getFaq());
  }, [dispatch]);

  // Memoized styles and components
  const labelClass = useMemo(() => 
    `text-2xl font-medium leading-normal m-2 break-words ${
      mode === 'dark' ? 'text-blue-100' : 'text-blue-800'
    }`,
    [mode]
  );

  // Memoized FormGroup to prevent unnecessary re-renders
  const FormGroup = useCallback(({ label, children }) => (
    <div className="w-10/12 m-2 flex flex-col">
      <label className={labelClass}>{label}</label>
      {children}
    </div>
  ), [labelClass]);

  // Fix for the warning: Ensure lab value is scalar, not array
  const currentLabValue = useMemo(() => 
    Array.isArray(formData.lab) ? formData.lab[0] || '' : formData.lab,
    [formData.lab]
  );

  return (
    <div className="form-container opacity-85 w-11/12 mx-auto p-4">
      {loading && <SuccessToaster title='Adding New Case..' color='yellow'/>}
      <h4>New Case</h4>
      
      <FormGroup label="Dressing Status">
        <select
          value={formData.dressing}
          className="form-input"
          onChange={(e) => handleInputChange('dressing', e.target.value)}
        >
          <option value="">Nothing selected</option>
          {DRESSING_OPTIONS.map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>
      </FormGroup>

      <FormGroup label="Wound Status">
        <select
          value={formData.wound}
          className="form-input"
          onChange={(e) => handleInputChange('wound', e.target.value)}
        >
          <option value="">Nothing selected</option>
          {WOUND_OPTIONS.map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>
      </FormGroup>

      <FormGroup label="Infection">
        <select
          className="form-input"
          value={formData.infection}
          onChange={(e) => handleInputChange('infection', e.target.value)}
        >
          <option value="">Nothing selected</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </FormGroup>

      <FormGroup label="Management">
        <select
          className="form-input"
          value={formData.managment}
          onChange={(e) => handleInputChange('managment', e.target.value)}
        >
          <option value="">Nothing selected</option>
          {MANAGEMENT_OPTIONS.map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>
      </FormGroup>

      <FormGroup label="Laboratory Tests">
        <select
          className="form-input"
          value={currentLabValue} // Fixed: using scalar value
          onChange={(e) => handleInputChange('lab', [e.target.value])}
        >
          <option value="">Nothing selected</option>
          {labtests?.map((item) => (
            <option key={item.id} value={item.id}>
              {item.type}
            </option>
          ))}
        </select>
      </FormGroup>

      <FormGroup label="Attach File">
        <input 
          type="file" 
          onChange={(e) => handleInputChange('file', e.target.files[0])} 
        />
      </FormGroup>

      <FormGroup label="Attach X-ray">
        <input 
          type="file" 
          onChange={(e) => handleInputChange('xray', e.target.files[0])} 
        />
      </FormGroup>

      <FormGroup label="Antibiotic">
        <div className="flex">
          <input
            className="form-input w-1/2"
            placeholder="Text"
            value={formData.antibiotic.text}
            onChange={(e) =>
              handleInputChange('antibiotic', { 
                ...formData.antibiotic, 
                text: e.target.value 
              })
            }
          />
          <select
            className="form-input w-1/2 ml-2"
            value={formData.antibiotic.type}
            onChange={(e) =>
              handleInputChange('antibiotic', { 
                ...formData.antibiotic, 
                type: e.target.value 
              })
            }
          >
            <option value="">Nothing selected</option>
            <option value="IV">IV</option>
            <option value="PO">PO</option>
          </select>
        </div>
      </FormGroup>

      <FormGroup label="Comorbidities">
        <input
          className="form-input"
          placeholder="Comorbidities"
          value={formData.comorbidities}
          onChange={(e) => handleInputChange('comorbidities', e.target.value)}
        />
      </FormGroup>

      <button
        className="w-48 h-12 transition-all duration-500 m-5 mt-4 px-4 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700"
        onClick={sendCase}
      >
        Add Case
      </button>
    </div>
  );
};

export default NewCase;