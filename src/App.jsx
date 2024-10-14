import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Import other components you want to route to
// import About from './About';
// import Contact from './Contact';
import Login from './components/Login';
import LandingPage from './components/LandingPage';
import ProductDetails from './components/ProductDetails';
import Signup from './components/Signup';
import MyAccount from './components/MyAccount';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/product" element={<ProductDetails />} />
        <Route path="/account" element={<MyAccount />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;