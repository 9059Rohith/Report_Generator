import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { generateReport } from '../services/api';

function ReportPage({ onLogout }) {
  const location = useLocation();
  const chatHistory = location.state?.chatHistory || [];

  const [report, setReport] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerateReport = async () => {
    setIsLoading(true);
    setError('');
    
    setReport('');

    const reportPrompt = `Based on the following conversation, please generate a structured summary report: \n\n ${JSON.stringify(chatHistory)}`;

    try {
      const response = await generateReport({ history: [], message: reportPrompt });
      setReport(response.data.response);
    } catch (err) {
      console.error("Failed to generate report:", err);
      setError("Could not generate the report. Your session may have expired.");
      if (err.response?.status === 401) { onLogout(); }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <Link to="/chat">
        <button className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 mb-4">
          &larr; Back to Chat
        </button>
      </Link>
      <h2 className="text-2xl font-bold text-gray-800">Generate Final Report</h2>
      <p className="text-gray-600 mt-2">Click the button below to ask the AI to create a final report based on your conversation.</p>
      
      <button onClick={handleGenerateReport} disabled={isLoading || chatHistory.length === 0} 
              className="mt-6 bg-green-500 text-white font-bold py-2 px-4 rounded-md hover:bg-green-600 disabled:bg-gray-400">
        {isLoading ? 'Generating...' : 'Generate Report'}
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {report && (
        <div className="mt-6 p-4 border rounded-md bg-gray-50">
          <h3 className="text-xl font-semibold text-gray-800">Generated Report</h3>
          <p className="mt-2 text-gray-700 whitespace-pre-wrap">{report}</p>
        </div>
      )}
    </div>
  );
}

export default ReportPage;