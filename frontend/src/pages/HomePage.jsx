import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="bg-white p-12 rounded-lg shadow-lg text-center">
      <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
        Welcome to the AI Report Generator
      </h1>
      <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
        Effortlessly transform your conversations into structured, insightful reports. Our intelligent chatbot guides you through the process, making data analysis and reporting faster than ever.
      </p>
      <Link to="/login">
        <button className="bg-green-500 text-white font-bold py-3 px-8 rounded-full hover:bg-green-600 transition duration-300">
          Get Started
        </button>
      </Link>
    </div>
  );
}

export default HomePage;