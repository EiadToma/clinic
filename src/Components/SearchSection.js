import React, { useState, useRef, useEffect } from 'react';
import { localSearch } from '../redux/UserSlice';
import {useDispatch} from 'react-redux'
import {getSearch,EmptySearch} from '../redux/UserSlice'
const SearchSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [gender, setGender] = useState(null);
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [minHeight, setMinHeight] = useState('');
  const [maxHeight, setMaxHeight] = useState('');
  const [minAge, setMinAge] = useState('');
  const [maxAge, setMaxAge] = useState('');
  const [minWeight, setMinWeight] = useState('');
  const [maxWeight, setMaxWeight] = useState('');
  const [job, setJob] = useState('');
  const [findUs, setFindUs] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const dispatch = useDispatch()
  const contentRef = useRef(null);
    const searchData = {
      gender:gender,
      city:city,
      country:country,
      minHeight:minHeight,
      maxHeight:maxHeight,
      minWeight:minWeight,
      maxWeight:maxWeight,
      minAge:minAge,
      maxAge:maxAge,
      job:job,
      findUs:findUs,
      phone_number:phoneNumber
    }
// make search check if the inputs empty then return all patients
  const cities =['Damascus','Latakia','Hama','Al-Hasakah','Homs','Idlib','Daraa','Deir ez-Zor','Ar-Raqqah','As-Suwayda','Tartus','Rif Dimashq','Aleppo','Al-Qunaytirah']

useEffect(() => {
    if (isExpanded) {
      contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
    } else {
      contentRef.current.style.maxHeight = '0px';
    }
  }, [isExpanded]);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
    dispatch(getSearch({
      gender:null,
      city:'',
      country:'',
      minHeight:'',
      maxHeight:'',
      minWeight:'',
      maxWeight:'',
      minAge:'',
      maxAge:'',
      job:'',
      findUs:'',
      phone_number:''
    }))
  };

  return (
    <div className="m-5 bg-gray-400 rounded overflow-hidden transition-all duration-300">
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e)=>dispatch(localSearch(e.target.value))}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
        />
        <button
          onClick={toggleExpansion}
          className=" px-4 w-32 h-10 bg-gray-800 text-white rounded focus:outline-none"
        >
          {isExpanded ? 'Collapse' : 'Advanced '}
        </button>
      </div>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: '0px' }}
      >
        <div className="p-4 grid grid-cols-1 gap-4 md:grid-cols-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Gender:</label>
            <div className="flex items-center">
              <label className="mr-2">
                <input type="checkbox" checked={gender===1} onChange={(e) => setGender(e.target.checked? 1:null)} className="mr-1"
                /> Male
              </label>
              <label>
                <input type="checkbox" checked={gender===0} onChange={(e) => setGender(e.target.checked?0:null)} className="mr-1" /> Female
              </label>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">City:</label>
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
            >
                      <option value="">No thing selected</option>
                      {cities.map(city => (<option key={city} value={city}>{city}</option>))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Country:</label>
            <input
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Min Height:</label>
            <input
              type="number"
              value={minHeight}
              onChange={(e) => setMinHeight(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Max Height:</label>
            <input
              type="number"
              value={maxHeight}
              onChange={(e) => setMaxHeight(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Min Age:</label>
            <input
              type="number"
              value={minAge}
              onChange={(e) => setMinAge(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Max Age:</label>
            <input
              type="number"
              value={maxAge}
              onChange={(e) => setMaxAge(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Min Weight:</label>
            <input
              type="number"
              value={minWeight}
              onChange={(e) => setMinWeight(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Max Weight:</label>
            <input
              type="number"
              value={maxWeight}
              onChange={(e) => setMaxWeight(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Job:</label>
            <input
              type="text"
              value={job}
              onChange={(e) => setJob(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">How did you find us?</label>
            <select value={findUs} onChange={(e) => setFindUs(e.target.value)}
             className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none" >
              <option value="">No thing selected</option>
              <option>Doctor</option>
              <option>Accident</option>
              <option>Another patient</option>
              <option>Social media</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number:</label>
            <input
              type="number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
            />
          </div>
        </div>
        <button className=' w-24 h-9 bg-green-300 m-2 rounded hover:bg-green-600  justify-end' onClick={()=>dispatch(getSearch(searchData))}>Search</button>
      </div>
    </div>
  );
};

export default SearchSection