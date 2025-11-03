import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import AuthPage from './pages/AuthPage';
import ChatPage from './pages/ChatPage';
import ReportPage from './pages/ReportPage';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [token, setToken] = useState(null);
  
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem('userToken');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);
  
  const handleLoginSuccess = (newToken) => {
    setToken(newToken);
    localStorage.setItem('userToken', newToken);
    navigate('/chat');
  };

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem('userToken');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar token={token} onLogout={handleLogout} />
      <main className="container mx-auto mt-8 p-4">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<AuthPage onLoginSuccess={handleLoginSuccess} />} />

          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/chat" element={<ChatPage onLogout={handleLogout} />} />
            <Route path="/report" element={<ReportPage onLogout={handleLogout} />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;