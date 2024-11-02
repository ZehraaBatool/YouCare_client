import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext'; // Adjust path as per your project structure
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const handleQuantityIncrease = (title, currentQuantity) => {
    updateQuantity(title, currentQuantity + 1);
  };

  const handleQuantityDecrease = (title, currentQuantity) => {
    if (currentQuantity > 1) {
      updateQuantity(title, currentQuantity - 1);
    } else {
      removeFromCart(title);
    }
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + parseFloat(item.price.replace('Rs.', '')) * item.quantity;
    }, 0).toFixed(2);
  };

  return (
    <main>
      <div className="cart_page">
      <h2>YOUR CART</h2>
        <table className="cart_table">
          <thead>
            <tr>
              <th></th> 
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.title}>
                <td>
                  <img src={item.image} alt={item.title} className="cart_product_image" />
                </td>
                <td className="cart_product_detail">
                  {item.title}
                  <div className="cart_product_price">Rs.{item.price}</div>
                </td>
                <td>
                  <div className="quantity_display">
                    <button
                      className="quantity_button"
                      onClick={() => handleQuantityDecrease(item.title, item.quantity)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="quantity_button"
                      onClick={() => handleQuantityIncrease(item.title, item.quantity)}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td>
                  Rs.{(parseFloat(item.price.replace('Rs.', '')) * item.quantity).toFixed(2)}
                </td>
                <td>
                  <button
                    className="cart_remove"
                    onClick={() => removeFromCart(item.title)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="total_section">
          <div className="total_label">Total:</div>
          <div className="total_price">Rs.{calculateTotal()}</div>
        </div>
        <div className="checkout_section">
          <button className="checkout_button" onClick={handleCheckout}>
            <b>CHECKOUT</b>
          </button>
        </div>
      </div>
    </main>
  );
};

export default Cart;
