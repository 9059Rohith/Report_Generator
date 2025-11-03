import React from 'react';

function ChatWindow({ chatHistory }) {
  return (
    <div className="h-96 bg-gray-50 p-4 rounded-md border overflow-y-auto flex flex-col space-y-4">
      {chatHistory.length === 0 && (
        <div className="flex justify-center items-center h-full">
            <p className="text-gray-500">Conversation will appear here...</p>
        </div>
      )}
      {chatHistory.map((msg, index) => (
        <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
          <div className={`max-w-xs md:max-w-md lg:max-w-lg p-3 rounded-lg ${msg.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
            <p className="text-sm" style={{ whiteSpace: 'pre-wrap' }}>{msg.parts}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ChatWindow;