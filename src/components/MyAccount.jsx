import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock, FaSave } from 'react-icons/fa';

function MyAccount() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user data from localStorage
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData) {
      setUsername(userData.username);
      setEmail(userData.email || '');
    } else {
      // Redirect to login if no user data found
      navigate('/login');
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update user data in localStorage
    const updatedUserData = { username, email, password };
    localStorage.setItem('user', JSON.stringify(updatedUserData));
    alert('Account information updated successfully!');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 animate-gradient-x">
      <div className="bg-white p-10 rounded-2xl shadow-2xl w-96 transform hover:scale-105 transition-all duration-300">
        <h2 className="text-4xl font-extrabold text-center mb-8 text-orange-600">My Account</h2>
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
            <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email"
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
              placeholder="New Password (optional)"
              className="pl-10 pr-4 py-3 w-full rounded-lg border-2 border-orange-200 focus:border-orange-500 focus:outline-none transition-all duration-300"
            />
          </div>
          <button 
            type="submit" 
            className="bg-gradient-to-r from-orange-400 to-red-500 text-white py-3 px-6 rounded-lg w-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
          >
            <FaSave className="mr-2" />
            Save Changes
          </button>
        </form>
        <div className="mt-6 text-center">
          <Link to="/landing" className="text-orange-600 hover:text-orange-800 font-semibold transition-colors duration-300">Back to Home</Link>
        </div>
      </div>
    </div>
  );
}

export default MyAccount;
