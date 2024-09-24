import React from 'react';

const LandingPage = () => {
  return (
    <div className="bg-gray-100 h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold mb-6">Welcome to Project Management</h1>
      <p className="text-lg text-gray-700 mb-8">Manage your projects effectively with our tools.</p>
      <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
        Get Started
      </button>
    </div>
  );
};

export default LandingPage;
