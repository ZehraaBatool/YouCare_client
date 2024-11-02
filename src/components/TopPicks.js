import { useState } from 'react'
import serum from './images/orange serum.png' 
import pink_drink from './images/pink drink.png'
import green_cream from './images/green cream.png'
import cleanser from './images/cleanser.png'
import cleansing_cream from './images/cleansing cream.png'
import kylie from './images/kylie skin.png'
import gel_cream from './images/gel cream.png'
import vitamin_C from './images/vitamin c.png'
import { useNavigate } from 'react-router-dom'
import { useCart } from './Pages/CartContext'
import { Link } from 'react-router-dom';
import SlidingCart from './Pages/SlidingCart';

const products = [
    {
      id: 'p1',
      title: 'GlossyBox Skincare: Deep Cleansing Cream',
      price: '1500',
      image: green_cream
    },
    {
      id: 'p2',
      title: 'Glow Recipe: Blueberry Bounce Gentle Cleanser',
      price: '2200',
      image: pink_drink
    },
    {
      id: 'p3',
      title: 'Anua: Heartleaf Pore Control Cleansing Oil',
      price: '2800',
      image: gel_cream
    },
    {
      id: 'p4',
      title: 'COSRX: Oil-Free Ultra-Moisturizing Lotion (with Birch Sap)',
      price: '1800',
      image: kylie
    }
]


export default function TopPicks() {
    const { addToCart } = useCart();
  const navigate = useNavigate();
  const [isSlidingCartOpen, setSlidingCartOpen] = useState(false);

  const addProductToCart = (product) => {
    addToCart(product);
    setSlidingCartOpen(true); // Open sliding cart after adding product
};
    
      const navigateToProductDetail = (productId) => {
        navigate(`/product/${productId}`);
      };

  return (
    <div className='topPicks'>
    <div>
        <h2 className='main-heading'>Our Finest Picks</h2>
        <h3 className='sub-heading'>Let’s Take A Glimpse into Our Skincare Collection</h3>
    </div>
    <div className='top_items'>
        {products.map(prod=>(
            <div key={prod.id} className='top_item'>
                <img className='top_image' src={prod.image} alt="" />
                <div className="top_item_details">
                    <h3 className="top_item_title">{prod.title}</h3>
                    <div className="top_item_desc">
                        <p className="top_item_sold">54 sold</p>
                    <p className="top_item_price">Rs. <span>{prod.price}</span></p>
                    </div>
                </div>
                <button onClick={() => addProductToCart(prod)} className='btn top_item_btn'>Add to cart</button>

            </div>
        ))}
        {/* <div className='top_image'>
            <img src={serum} alt=''></img>
        </div>
        <div className='top_image'>
            <img src={pink_drink} alt=''></img>
        </div>
        <div className='top_image'>
            <img src={green_cream} alt=''></img>
        </div>
        <div className='top_image'>
            <img src={cleansing_cream} alt=''></img>
        </div>
        <div className='top_image'>
            <img src={cleanser} alt=''></img>
        </div>
        <div className='top_image'>
            <img src={gel_cream} alt=''></img>
        </div>
        <div className='top_image'>
            <img src={kylie} alt=''></img>
        </div>
        <div className='top_image'>
            <img src={vitamin_C} alt=''></img>
        </div> */}

    </div>
    <Link to="/catalog">
    <p className='top_items_more'>Explore More -&gt;</p>
    </Link>

    {/* Sliding Cart Component */}
    <SlidingCart
        isOpen={isSlidingCartOpen}
        onClose={() => setSlidingCartOpen(false)}
        onViewFullCart={() => navigate('/cart')}
      />
    </div>
  )
}
