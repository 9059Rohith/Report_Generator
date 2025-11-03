import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ token, onLogout }) {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800">
          <Link to="/">AI Reporter</Link>
        </div>
        <div className="flex items-center space-x-6">
          <Link to="/" className="text-gray-600 hover:text-blue-500">Home</Link>
          <Link to="/about" className="text-gray-600 hover:text-blue-500">About</Link>
          <Link to="/contact" className="text-gray-600 hover:text-blue-500">Contact</Link>
        </div>
        <div>
          {token ? (
            <div className="flex items-center space-x-4">
              <Link to="/chat" className="text-gray-600 hover:text-blue-500 font-semibold">Chatbot</Link>
              <button onClick={onLogout} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Logout</button>
            </div>
          ) : (
            <Link to="/login">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Login / Sign Up</button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;