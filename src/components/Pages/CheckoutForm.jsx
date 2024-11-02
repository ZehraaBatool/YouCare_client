import React, { useState } from 'react';
import './CheckoutForm.css';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../Pages/CartContext';
import Footer from '../FooterEnd/FooterEnd';

const CheckoutForm = ({ onClose }) => {
  const { cartItems } = useCart();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    address: '',
    city: '',
    zipCode: '',
    paymentMethod: 'COD',
  });
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate('/catalog'); 
  };

  const regions = [
    { region: 'Capital', cities: ['Islamabad'] },
    { region: 'Sindh', cities: ['Karachi', 'Hyderabad', 'Sukkur'] },
    { region: 'Punjab', cities: ['Lahore', 'Faisalabad', 'Multan', 'Rawalpindi'] },
    { region: 'Balochistan', cities: ['Quetta', 'Gwadar', 'Turbat'] },
    { region: 'Khyber Pakhtunkhwa', cities: ['Peshawar', 'Mardan', 'Abbottabad'] }
  ];

  const calculateTotalAmount = () => {
    let subtotal = cartItems.reduce((total, item) => total + parseFloat(item.price.replace('$', '')) * item.quantity, 0);
    let deliveryFee = 200;
    return (subtotal + deliveryFee).toFixed(2);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      const orderDetails = {
        ...formData,
        totalAmount: calculateTotalAmount(),
        items: cartItems.map(item => ({
          productId: item.id,
          name: item.title,
          quantity: item.quantity,
          price: item.price,  
          image: item.image, 
        })),
      };
      navigate('/order-summary', { state: { orderDetails } });
    } catch (error) {
      console.error('Error processing order:', error);
    }
  };

  return (
    <div className="checkout_body">
      <div className="checkout_container">
        <div className="customer_details">
          <h2>Customer Details</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name</label>
            <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required />
            
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder='YouCare@gmail.com' />
            
            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="text" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
            
            <label htmlFor="address">Address</label>
            <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />
            
            <label htmlFor="city">City</label>
            <select id="city" name="city" value={formData.city} onChange={handleChange} required>
              <option value="">Select City</option>
              {regions.map(region => (
                <optgroup key={region.region} label={region.region}>
                  {region.cities.map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </optgroup>
              ))}
            </select>
            
            <label htmlFor="zipCode">Zip Code</label>
            <input type="text" id="zipCode" name="zipCode" value={formData.zipCode} onChange={handleChange} required />
            <a href="https://www.pakpost.gov.pk/postcodes.php" 
               target="_blank" 
               rel="noopener noreferrer" 
               style={{ color: '#3498db', fontSize: '14px', textDecoration: 'underline', marginTop: '5px', display: 'block' }}>
               Check your ZIP code here
            </a>

            <div className="button_group">
              <button type="submit">Place Order</button>
              <button type="button" onClick={handleCancel}>Cancel</button>
            </div>
          </form>
        </div>
        
        <div className="cart_summary">
          <h2>Cart Summary</h2>
          <div className="cart_items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart_item">
                <img src={item.image} alt={item.title} className="cart_summary_image" />
                <div>
                  <div>{item.title}</div>
                  <div><b>Quantity:</b> {item.quantity}</div>
                  <div><b>Price:</b> Rs.{item.price}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="total_amount">
            
            <h3>Total Amount: Rs.{calculateTotalAmount()}</h3>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CheckoutForm;
