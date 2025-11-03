import React, { useState } from 'react';
import { login } from '../services/api';

function LoginForm({ onLoginSuccess, onError }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login({ email, password });
      onLoginSuccess(response.data.token);
    } catch (err) {
      const message = err.response?.data?.message || 'Failed to login';
      onError(message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-3xl font-bold text-center text-gray-800">Login</h2>
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
      <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        Login
      </button>
    </form>
  );
}

export default LoginForm;