import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import { Box } from '@mui/material';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import MainVideo from './home/MainVideo';
import Properties from './Properties';
import Description from './Description';
import TopPicks from './TopPicks';
import Services from './Services';
import Footer from './FooterEnd/FooterEnd';
import Quiz from './Pages/quiz';
import Cleansers from './Pages/cleanser';
import Moisturizers from './Pages/moisturizer';
import Serums from './Pages/serum';
import Sunscreens from './Pages/sunscreen';
import TermsOfService from './Pages/TermsAndServices';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import TrackOrder from './Pages/TrackOrder';
import ContactPage from './Pages/ContactPage';
import AboutUs from './Pages/AboutUs';
import Faqs from './Pages/Faqs';
import Location from './Pages/Location';
import ShippingAndReturn from './Pages/ShippingAndReturn';
import Catalog from './Pages/Catalog';
import Cart from './Pages/Cart';
import { CartProvider } from './Pages/CartContext'; 
import CheckoutForm from './Pages/CheckoutForm';
import Admin from './Pages/AdminPage';
import OrderSummary from './Pages/OrderSummary';
import SignUpPage from './Pages/SignUpPage';
import SignInPage from './Pages/SignIn';
import ProductDetail from'./ProductDetail'
import Home from './Pages/Home';

function App() {
  const location = useLocation();
  const isAdminPage = location.pathname === '/admin';

  return (
    <CartProvider>
      <Box>
        {!isAdminPage && <Navbar className="navbar" />}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skintest" element={<QuizPage />} />
            <Route path="/skincare/cleansers" element={<Cleansers />} />
            <Route path="/skincare/moisturizers" element={<Moisturizers />} />
            <Route path="/skincare/serums" element={<Serums />} />
            <Route path="/skincare/sunscreen" element={<Sunscreens />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/track-order" element={<TrackOrder />} />
            <Route path="/contact-page" element={<ContactPage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/faq-s" element={<Faqs />} />
            <Route path="/loc-ation" element={<Location />} />
            <Route path="/shipping-return" element={<ShippingAndReturn />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckoutForm />} />
            <Route path="/order-summary" element={<OrderSummary />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/product/:product_id" element={<ProductDetail />} />
          </Routes>
        </div>
      </Box>
    </CartProvider>
  );
}


const QuizPage = () => <Quiz />;

function MainApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default MainApp;
