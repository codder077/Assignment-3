import { Link } from 'react-router-dom';

const HomePage = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
    <h1 className="text-6xl font-bold mb-6">Welcome to Project Management</h1>
    <p className="text-lg mb-4">Easily manage your projects and collaborate with your team.</p>
    <Link to="/dashboard" className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow-lg text-xl transition duration-300 ease-in-out transform hover:scale-105">
      Get Started
    </Link>
  </div>
);

export default HomePage;
