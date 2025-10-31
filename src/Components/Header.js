import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdArrowBack, MdSettings } from "react-icons/md";
import { useNavigate, useLocation } from "react-router-dom";
import { changeMode, Logout } from "../redux/UserSlice";

const Header = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.user.Mode);
  const location = useLocation();
  const navigate = useNavigate();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const isDark = mode === "dark";

  // Apply body background (⚠️ consider moving this to a layout wrapper)
  useEffect(() => {
    const bodyElement = document.body;
    bodyElement.style.backgroundColor = isDark ? "#1f2937" : "#f9fafb"; // Tailwind gray-900 / gray-50
  }, [isDark]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  const toggleMode = () => {
    dispatch(changeMode(isDark ? "light" : "dark"));
    setDropdownOpen(false);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(Logout());
    navigate("/clinic");
    setDropdownOpen(false);
  };

  const hideIcons = location.pathname === "/clinic" || location.pathname === "/";

  return (
    <div
      className={`w-full flex items-center justify-between px-4 py-3 ${
        isDark ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      } shadow-sm`}
    >
      {/* Back Icon */}
      {!hideIcons ? (
        <MdArrowBack
          onClick={() => navigate(-1)}
          className="text-2xl cursor-pointer hover:text-cyan-500 transition-colors"
        />
      ) : (
        <div className="w-6" /> 
      )}

      {/* Title */}
      <h1 className="text-center flex-1 font-bold text-lg tracking-tight">
        DIABETES CLINIC MANAGEMENT SYSTEM
      </h1>

      {/* Settings Dropdown */}
      {!hideIcons ? (
        <div className="relative" ref={dropdownRef}>
          <MdSettings
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="text-2xl cursor-pointer hover:text-cyan-500 transition-colors"
          />
          {dropdownOpen && (
            <div
              className={`absolute right-0 mt-2 w-48 rounded-lg shadow-lg z-20 overflow-hidden ${
                isDark ? "bg-gray-700 border border-gray-600" : "bg-white border border-gray-200"
              }`}
            >
              <button
                onClick={toggleMode}
                className={`w-full px-4 py-3 text-left font-medium transition ${
                  isDark
                    ? "text-cyan-300 hover:bg-gray-600"
                    : "text-cyan-700 hover:bg-gray-100"
                }`}
              >
                {isDark ? "Light Mode" : "Dark Mode"}
              </button>
              <button
                onClick={handleLogout}
                className={`w-full px-4 py-3 text-left font-medium transition ${
                  isDark
                    ? "text-red-300 hover:bg-gray-600"
                    : "text-red-600 hover:bg-gray-100"
                }`}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="w-6" /> 
      )}
    </div>
  );
};

export default Header;