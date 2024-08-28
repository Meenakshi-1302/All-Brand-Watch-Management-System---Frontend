import React from 'react';
import { FaHome, FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const AdminNavbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Logic for logout action (e.g., clearing tokens, redirecting)
        console.log("Logout clicked");
        // Redirect to the login page
        navigate('/login');
    };

    return (
        <nav className="bg-blue-800 text-white p-4 flex justify-between items-center">
            <div className="flex items-center">
                <button
                    className="text-white hover:text-gray-300 focus:outline-none"
                    onClick={() => navigate('/')}
                    aria-label="Home"
                >
                    <FaHome size={24} />
                </button>
                <span className="ml-4 text-lg font-semibold">Admin Panel</span>
            </div>
            <button
                className="flex items-center bg-red-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
                onClick={handleLogout}
                aria-label="Logout"
            >
                <FaSignOutAlt size={18} className="mr-2" />
                Logout
            </button>
        </nav>
    );
};

export default AdminNavbar;
