import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';

function AuthPage({ onLoginSuccess }) {
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');

  const handleError = (message) => {
    setError(message);
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded-xl shadow-lg">
      {isLogin ? (
        <LoginForm onLoginSuccess={onLoginSuccess} onError={handleError} />
      ) : (
        <SignupForm onLoginSuccess={onLoginSuccess} onError={handleError} />
      )}

      {error && <p className="text-red-500 text-center mt-4">{error}</p>}

      <button onClick={() => { setIsLogin(!isLogin); setError(''); }} className="w-full mt-6 text-center text-blue-500 hover:underline">
        {isLogin ? 'Need an account? Sign Up' : 'Have an account? Login'}
      </button>
    </div>
  );
}

export default AuthPage;