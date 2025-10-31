import React, { useState } from 'react';
import { createUser } from '../redux/UserSlice';
import { useSelector, useDispatch } from 'react-redux';
import SuccessToaster from '../Components/SuccessToaster'

const User_create = () => {
    const [type, setType] = useState(0);
    const [user_name, setUser_Name] = useState('');
    const [fullName, setFull_Name] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const mode = useSelector(state => state.user.Mode)
    const loading = useSelector(state => state.user.createUser.isLoading)
    const token = localStorage.getItem('token')
    const dispatch = useDispatch()

    const handelPassword = (e) => {
        const value = e.target.value;
        if (value.length < 8) {
            setError('Password must be 8 digits or more');
        } else {
            setError('');
        }
        setPassword(value);
    };

    const create_User = () => {
        const data = {
            user_name: user_name,
            full_name: fullName,
            password: password,
            type: Number(type)
        }
        console.log(data)
        dispatch(createUser({data:data,token:token}))
    }

    return (
        <div className={`pb-3 m-auto w-11/12 h-max rounded form-container`}>
            {loading && <SuccessToaster title='Creating New User' />}
            <div className='title-section m-2'>
                <div className='col'></div>
                <p className='section-title text-black'>Create New User</p>
            </div>
            <div className='w-10/12 m-2 flex flex-col'>
                <label className={`text-3xl font-medium leading-normal m-2 break-words ${mode === 'dark' ? 'text-blue-100' : 'text-blue-800'}`}>
                    Type
                </label>
                <select className='form-input' defaultValue="" onChange={(e)=>setType(e.target.value)}>
                    <option value="" disabled>Nothing selected</option>
                    <option value={1}>Secretary</option>
                    <option value={2}>Doctor</option>
                </select>
            </div>
            <div className='w-10/12 m-2 flex flex-col'>
                <label className={`text-3xl font-medium leading-normal m-2 break-words ${mode === 'dark' ? 'text-blue-100' : 'text-blue-800'}`}>
                    User Name
                </label>
                <input placeholder='user name' className='form-input' value={user_name} onChange={(e) => setUser_Name(e.target.value)} />
            </div>
            <div className='w-10/12 m-2 flex flex-col'>
                <label className={`text-3xl font-medium leading-normal m-2 break-words ${mode === 'dark' ? 'text-blue-100' : 'text-blue-800'}`}>
                    Full name
                </label>
                <input placeholder='Full name' className='form-input' value={fullName} onChange={(e) => setFull_Name(e.target.value)} />
            </div>
            <div className='w-10/12 m-2 flex flex-col'>
                <label className={`text-3xl font-medium leading-normal m-2 break-words ${mode === 'dark' ? 'text-blue-100' : 'text-blue-800'}`}>
                    Password
                </label>
                <input placeholder='user password' className='form-input' type='password' value={password} onChange={(e) => handelPassword(e)} />
                {error && <p className=' text-red-700'>{error}</p>}
            </div>
            <button className=' w-48 h-12 transition-all duration-500 m-5 mt-4 px-4 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700
            ' disabled={error || !password || !user_name} onClick={() => create_User()}>Create User</button>
        </div>
    );
}

export default User_create;


