import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaUser, FaLock, FaUserPlus } from 'react-icons/fa';

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Signup data:', { username, password });
    
    // For this example, we'll just store in localStorage
    localStorage.setItem('user', JSON.stringify({ username, password }));
    
    // Redirect to main page after signup
    navigate('/');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 animate-gradient-x">
      <div className="bg-white p-10 rounded-2xl shadow-2xl w-96 transform hover:scale-105 transition-all duration-300">
        <h2 className="text-4xl font-extrabold text-center mb-8 text-orange-600">Join Us!</h2>
        <form onSubmit={handleSubmit}>
          <div className="relative mb-6">
            <FaUser className="absolute top-3 left-3 text-gray-400" />
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Username"
              className="pl-10 pr-4 py-3 w-full rounded-lg border-2 border-orange-200 focus:border-orange-500 focus:outline-none transition-all duration-300"
            />
          </div>
          <div className="relative mb-6">
            <FaLock className="absolute top-3 left-3 text-gray-400" />
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
              className="pl-10 pr-4 py-3 w-full rounded-lg border-2 border-orange-200 focus:border-orange-500 focus:outline-none transition-all duration-300"
            />
          </div>
          <button 
            type="submit" 
            className="bg-gradient-to-r from-orange-400 to-red-500 text-white py-3 px-6 rounded-lg w-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
          >
            <FaUserPlus className="mr-2" />
            Sign Up
          </button>
        </form>
        <div className="mt-6 text-center">
          <span className="text-gray-600">Already have an account?</span>
          <Link to="/login" className="text-orange-600 hover:text-orange-800 ml-1 font-semibold transition-colors duration-300">Log In</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;