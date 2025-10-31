import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginRequest } from '../redux/UserSlice';
import SuccessToaster from '../Components/SuccessToaster';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const credentials = useSelector((state) => state.user.loginRequest?.data);
  const loading = useSelector((state) => state.user.loginRequest?.isLoading);
  const token = credentials?.token;
  const userInfo = credentials?.user;

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
      if (userInfo) {
        if (userInfo.type === 0) navigate('/patients');
        else if (userInfo.type === 1) navigate('/secertaria');
      }
    }
  }, [token, userInfo, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-100 via-white to-sky-200">
      {loading && <SuccessToaster title="Logging in..." />}
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">Login to Your Account</h2>

        <div className="flex flex-col space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Username</label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-400 focus:outline-none"
              placeholder="Enter your username"
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Password</label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-400 focus:outline-none"
              placeholder="Enter your password"
              type="password"
              onChange={(e) => setUserPassword(e.target.value)}
              value={userPassword}
            />
          </div>

          <button
            disabled={!userName || !userPassword}
            onClick={() =>
              dispatch(loginRequest({ user_name: userName, password: userPassword }))
            }
            className={`mt-4 w-full py-2 rounded-lg text-white font-semibold transition-all duration-200 ${
              userName && userPassword
                ? 'bg-sky-500 hover:bg-sky-600'
                : 'bg-gray-300 cursor-not-allowed'
            }`}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
