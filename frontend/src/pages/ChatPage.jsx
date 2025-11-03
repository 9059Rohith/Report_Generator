import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { generateReport } from '../services/api';
import ChatWindow from '../components/ChatWindow';

function ChatPage({ onLogout }) {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    

    const userMessage = { role: 'user', parts: message };
    const updatedHistory = [...chatHistory, userMessage];
    setChatHistory(updatedHistory);
    setMessage('');
    setIsLoading(true);

    try {
      const response = await generateReport({ history: chatHistory, message: message });
      const botMessage = { role: 'model', parts: response.data.response };
      setChatHistory([...updatedHistory, botMessage]);
    } catch (error) {
      console.error("Error communicating with the bot:", error);
      alert("An error occurred. Your session may have expired.");
      if (error.response?.status === 401) { onLogout(); }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Chatbot</h2>
        <Link to="/report" state={{ chatHistory: chatHistory }}>
          <button disabled={chatHistory.length === 0} className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 disabled:bg-gray-400">
            Generate Report
          </button>
        </Link>
      </div>

      <ChatWindow chatHistory={chatHistory} />

      <form onSubmit={handleSubmit} className="mt-4 flex space-x-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask me questions to generate a report..."
          disabled={isLoading}
          className="flex-grow px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
        <button type="submit" disabled={isLoading} className="w-24 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 disabled:bg-gray-400">
          {isLoading ? '...' : 'Send'}
        </button>
      </form>
    </div>
  );
}

export default ChatPage;