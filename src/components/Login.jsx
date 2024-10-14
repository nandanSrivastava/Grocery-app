// src/components/Login.js
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaUser, FaLock, FaSignInAlt } from 'react-icons/fa';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        if (username && password) {
            navigate('/landing');
        } else {
            alert('Please enter both username and password');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 animate-gradient-x">
            <div className="bg-white p-10 rounded-2xl shadow-2xl w-96 transform hover:scale-105 transition-all duration-300">
                <h2 className="text-4xl font-extrabold text-center mb-8 text-orange-600">Welcome Back!</h2>
                <div className="relative mb-6">
                    <FaUser className="absolute top-3 left-3 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Email/Username"
                        className="pl-10 pr-4 py-3 w-full rounded-lg border-2 border-orange-200 focus:border-orange-500 focus:outline-none transition-all duration-300"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="relative mb-6">
                    <FaLock className="absolute top-3 left-3 text-gray-400" />
                    <input
                        type="password"
                        placeholder="Password"
                        className="pl-10 pr-4 py-3 w-full rounded-lg border-2 border-orange-200 focus:border-orange-500 focus:outline-none transition-all duration-300"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button 
                    className="bg-gradient-to-r from-orange-400 to-red-500 text-white py-3 px-6 rounded-lg w-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                    onClick={handleLogin}
                >
                    <FaSignInAlt className="mr-2" />
                    Login
                </button>
                <div className="flex justify-between mt-6 text-sm">
                    <a href="#" className="text-orange-600 hover:text-orange-800 transition-colors duration-300">Forgot Password?</a>
                    <Link to="/signup" className="text-orange-600 hover:text-orange-800 transition-colors duration-300">Sign Up</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
