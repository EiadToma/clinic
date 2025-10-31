import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Nav = () => {
  const location = useLocation();
  const [selected, setSelected] = useState(location.pathname);
  const navbarPaths = ['/patients', '/usercreate', '/full-search'];
  const [openlist, setOpenlist] = useState(false);  
  // Update selected tab when location changes
  useEffect(() => {
    setSelected(location.pathname);
  }, [location.pathname]);

  // Check if the current location pathname is in the array of navbar paths
  const showNavbar = navbarPaths.includes(location.pathname);
  const mode = useSelector(state => state.user.Mode);

  return (
    <>
      {showNavbar && (
        <nav className={`${mode === 'dark' ? 'bg-gray-900' : 'bg-white'} items-center justify-center flex w-full h-10 z-20 border-b border-gray-200 dark:border-gray-600`}>
          <div className="max-w-screen-xl align-middle justify-center flex w-full h-full">
            <ul className={`${mode === 'dark' ? 'bg-gray-900' : 'bg-white'} flex h-fit z-50 flex-col p-4 md:p-0 mt-4 font-medium border w-2/3 border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:justify-between md:m-auto md:flex-row md:border-0 dark:border-gray-700`}>
              <li className={`text-center px-1 rounded ${selected === '/patients' ? `border-b ${mode === 'dark' ? 'border-white' : 'border-black'}` : ''}`}>
                <Link 
                  onClick={() => setSelected('/patients')}
                  className={`${mode === 'dark' ? 'text-white' : 'text-gray-900'} block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-green-500 dark:hover:bg-green-700 md:dark:hover:bg-transparent dark:border-green-700`} 
                  to='/patients'
                >
                  Home
                </Link>
              </li>
              <li className={`text-center px-1 rounded ${selected === '/usercreate' ? `border-b ${mode === 'dark' ? 'border-white' : 'border-black'}` : ''}`}>
                <Link 
                  onClick={() => setSelected('/usercreate')}
                  className={`${mode === 'dark' ? 'text-white' : 'text-gray-900'} block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-green-500 dark:hover:bg-green-700 md:dark:hover:bg-transparent dark:border-green-700`} 
                  to='/usercreate'
                >
                  Create User
                </Link>
              </li>
              <li className={`text-center px-1 rounded ${selected === '/full-search' ? `border-b ${mode === 'dark' ? 'border-white' : 'border-black'}` : ''}`}>
                <Link 
                  onClick={() => setSelected('/full-search')}
                  className={`${mode === 'dark' ? 'text-white' : 'text-gray-900'} block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-green-500 dark:hover:bg-green-700 md:dark:hover:bg-transparent dark:border-green-700`} 
                  to='/full-search'
                >
                  Full Search
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </>
  );
};

export default Nav;
