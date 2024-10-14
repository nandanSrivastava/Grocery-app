import { Link, useNavigate } from 'react-router-dom';
import ProductDetails from './ProductDetails';
import { FaShoppingCart, FaUser, FaSignOutAlt, FaSearch } from 'react-icons/fa';

const LandingPage = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/login');
    };

    return (
        <div className="bg-gradient-to-br from-yellow-50 to-orange-100 min-h-screen flex flex-col">
            <header className="bg-gradient-to-r from-orange-100 to-red-100 shadow-md p-4 sticky top-0 z-50">
                <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
                    <h1 className="text-2xl sm:text-3xl font-bold text-orange-600 mb-4 sm:mb-0">Grocery Delight</h1>
                    <div className="flex-grow mx-0 sm:mx-6 w-full sm:w-auto mb-4 sm:mb-0">
                        <div className="relative max-w-md mx-auto">
                            <input 
                                type="text" 
                                placeholder="Search products..." 
                                className="w-full py-2 px-4 rounded-lg border border-black focus:outline-none focus:border-orange-500 transition duration-300 text-base sm:text-lg bg-transparent"
                            />
                            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-orange-500 hover:text-orange-600 transition duration-300">
                                <FaSearch className="text-lg sm:text-xl" />
                            </button>
                        </div>
                    </div>
                    <nav className="flex items-center space-x-4 sm:space-x-6">
                        <Link to="/cart" className="text-orange-600 hover:text-orange-800 transition duration-300">
                            <FaShoppingCart className="text-xl sm:text-2xl" />
                        </Link>
                        <Link to="/account" className="text-orange-600 hover:text-orange-800 transition duration-300">
                            <FaUser className="text-xl sm:text-2xl" />
                        </Link>
                        <button onClick={handleLogout} className="text-orange-600 hover:text-orange-800 transition duration-300">
                            <FaSignOutAlt className="text-xl sm:text-2xl" />
                        </button>
                    </nav>
                </div>
            </header>

            <main className="flex-grow container mx-auto p-4 sm:p-8">
                <section className="bg-gradient-to-r from-yellow-400 to-orange-500 p-6 sm:p-10 rounded-3xl mb-8 sm:mb-12 shadow-2xl transform hover:scale-105 transition duration-300 overflow-hidden relative">
                    <div className="absolute top-0 left-0 w-full h-full bg-white opacity-10 transform -skew-y-6"></div>
                    <h2 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-4 text-white relative z-10">Diwali Extravaganza!</h2>
                    <p className="text-lg sm:text-2xl text-white relative z-10">Illuminate your festivities with our exclusive Diwali offers. Shop now and save big!</p>
                    <button className="mt-4 sm:mt-6 bg-white text-orange-500 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold hover:bg-orange-100 transition duration-300 relative z-10 text-sm sm:text-base">Explore Deals</button>
                </section>
                
                <section className="mb-8 sm:mb-12">
                    <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-8 text-gray-800">Explore Categories</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
                        {[
                            { name: 'Fruits', icon: '🍎', bgColor: 'bg-red-100', textColor: 'text-red-500', hoverColor: 'hover:bg-red-200' },
                            { name: 'Vegetables', icon: '🥕', bgColor: 'bg-green-100', textColor: 'text-green-500', hoverColor: 'hover:bg-green-200' },
                            { name: 'Snacks', icon: '🍪', bgColor: 'bg-yellow-100', textColor: 'text-yellow-500', hoverColor: 'hover:bg-yellow-200' }
                        ].map((category, index) => (
                            <div key={index} className={`${category.bgColor} p-4 sm:p-8 rounded-3xl shadow-lg ${category.hoverColor} transition-all duration-300 transform hover:scale-105 cursor-pointer`}>
                                <div className="flex items-center mb-2 sm:mb-4">
                                    <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center bg-white`}>
                                        <span className={`text-2xl sm:text-4xl ${category.textColor}`}>{category.icon}</span>
                                    </div>
                                    <h3 className={`text-xl sm:text-2xl font-semibold ml-2 sm:ml-4 ${category.textColor}`}>{category.name}</h3>
                                </div>
                                <p className="text-sm sm:text-base text-gray-700">Discover our fresh and high-quality {category.name.toLowerCase()} for your daily needs.</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-8 text-gray-800">Featured Product</h2>
                    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                        <ProductDetails />
                    </div>
                </section>
            </main>

            <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-6 sm:p-12 mt-8 sm:mt-12">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-xl sm:text-2xl font-bold mb-2">Grocery Delight</h3>
                        <p className="text-sm sm:text-base text-gray-400">Bringing freshness to your doorstep</p>
                    </div>
                    <div className="flex flex-wrap justify-center md:justify-end">
                        <a href="#" className="text-sm sm:text-base text-gray-400 hover:text-white mx-2 sm:mx-4 my-1 sm:my-2 transition duration-300">Privacy Policy</a>
                        <a href="#" className="text-sm sm:text-base text-gray-400 hover:text-white mx-2 sm:mx-4 my-1 sm:my-2 transition duration-300">Terms of Service</a>
                        <a href="#" className="text-sm sm:text-base text-gray-400 hover:text-white mx-2 sm:mx-4 my-1 sm:my-2 transition duration-300">Contact Us</a>
                    </div>
                </div>
                <div className="text-center mt-4 sm:mt-8 text-xs sm:text-sm text-gray-500">
                    <p>&copy; 2023 Grocery Delight. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
