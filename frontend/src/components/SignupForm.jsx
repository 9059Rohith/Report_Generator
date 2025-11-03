import React, { useState } from 'react';
import { signup } from '../services/api';

function SignupForm({ onLoginSuccess, onError }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signup({ name, email, password });
      onLoginSuccess(response.data.token);
    } catch (err) {
      const message = err.response?.data?.message || 'Failed to sign up';
      onError(message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-3xl font-bold text-center text-gray-800">Sign Up</h2>
      <div>
        <label className="block text-sm font-medium text-gray-700">Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required 
               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required 
               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required 
               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
      </div>
      <button type="submit" className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
        Sign Up
      </button>
    </form>
  );
}

export default SignupForm;