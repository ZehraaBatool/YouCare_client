import React from 'react'
import international from './images/internationalization.png'
import support from './images/support.png'
import exchange from './images/exchange.png'



export default function Services() {
  return (
    <div className="services-container">
      <h2 className='main-heading'>We Provide...</h2>
      <div className="services">
        <div className="service">
          <img src={international} alt=''></img>
          <div>
            <h3>Internationalization</h3>
            <p>Offer multi-currency pricing and international shipping options to cater to international customers</p></div>
        </div>
        <div className="service">
          <img src={exchange} alt=''></img>
          <div>
            <h3>Returns and Exchanges</h3>
            <p>Provide a hassle-free returns and exchanges process within a week</p></div>
        </div>
        <div className="service">
          <img src={support} alt=''></img>
          <div>
            <h3>Offer 24/7 Support</h3>
            <p>Offer real-time assistance to customers 24 hours a day</p></div>
        </div>
      </div>
    </div>

  )
}
