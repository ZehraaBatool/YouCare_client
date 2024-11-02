import React, {useEffect, useState} from 'react';
import './TrackOrder.css';
import Footer from '../FooterEnd/FooterEnd';
import image3 from '../images/Glow quester (1).png';

export default function TrackOrder() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingResult, setTrackingResult] = useState('');
  const [loading, setLoading] = useState(false);

  const doTrack = () => {

    if (trackingNumber.trim() === '') {
      alert('Please enter your tracking number.');
      return;
    }
    
    setLoading(true);
    setTimeout(() => {
      setTrackingResult(`Tracking result for ${trackingNumber}`);
      setLoading(false);
    }, 1500); 
  };

  return (
    <div className='track-order-body'>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {/* <div className='hero-section'>
        <img src={image3} alt='Glow' className='hero-image' />
      </div> */}

      <div className='content'>
        <h1>Track Your Order</h1>
        <p className='instructions'>
          Enter your tracking number below to get the latest update on your order. 
          If you experience issues, reach out to us at <a href="mailto:support@youcare.com">support@youcare.com</a>.
        </p>
        
        <div className='input-container'>
          <input 
            type="text" 
            placeholder="Enter tracking number" 
            value={trackingNumber} 
            onChange={(e) => setTrackingNumber(e.target.value)} 
            maxLength="50" 
            className='tracking-input'
          />
          <button onClick={doTrack} className='track-button'>
            {loading ? 'Tracking...' : 'TRACK'}
          </button>
        </div>
        
        <div className='tracking-result'>
          {trackingResult && <p><strong>{trackingResult}</strong></p>}
          <br></br>
          <br></br>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}


