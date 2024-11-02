import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext'; // Adjust path as per your project structure
import './Catalog.css';
import SlidingCart from './SlidingCart'; // Import SlidingCart component

// Import images
import img1 from '../images/moisturizer1.png';
import img2 from '../images/moisturizer2.png';
import img3 from '../images/moisturizer3.png';
import img4 from '../images/moisturizer4.png';
import addCart from '../images/AddToCart.png';


const Moisturizer = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [isSlidingCartOpen, setSlidingCartOpen] = useState(false);

  const products = [
    {
      id: 'p4',
      title: 'COSRX: Oil-Free Ultra-Moisturizing Lotion (with Birch Sap)',
      price: '1800',
      image: img1
    },
    {
      id: 'p5',
      title: 'Summer Fridays: Cloud Dew Oil-Free Gel Cream',
      price: '3000',
      image: img2
    },
    {
      id: 'p6',
      title: 'Summer Fridays: Rich Cushion Cream, Ultra-Plumping ',
      price: '3500',
      image: img3
    },
    {
      id: 'p7',
      title: 'Glow Recipe: Watermelon Glow Pink Juice Moisturizer',
      price: '2800',
      image: img4
    }
  ];

  const addProductToCart = (product) => {
    addToCart(product);
    setSlidingCartOpen(true); // Open sliding cart after adding product
  };

  const navigateToProductDetail = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <main>
      <div className="catalog">
        <div className="catalog_container">
          <div className="products">
            {products.map((product) => (
              <div className="product_card" key={product.id}>
                <div className="pro_image" onClick={() => navigateToProductDetail(product.id)}>
                  <img src={product.image} alt={product.title} />
                </div>
                <div className="product_features" onClick={() => navigateToProductDetail(product.id)}>
                  <p>{product.title}</p>
                </div>
                <div className="price">
                  <b>{product.price}</b>
                </div>
                <div className="button">
                  <button
                    className="add_to_cart_button"
                    onClick={() => addProductToCart(product)}
                  >
                    <img src={addCart} alt={product.title} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Sliding Cart Component */}
      <SlidingCart
        isOpen={isSlidingCartOpen}
        onClose={() => setSlidingCartOpen(false)}
        onViewFullCart={() => navigate('/cart')}
      />
    </main>
  );
};

export default Moisturizer;