import React, {useEffect} from "react";
import Navbar from '../Navbar/Navbar';
import Footer from '../FooterEnd/FooterEnd';
import standardIcon from '../images/standard.png';
import expressIcon from '../images/express.png';
import courierIcon from '../images/courier.png';
import './ShippingAndReturn.css';
import '../App.css';

export default function ShippingAndReturn() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    return (
        <div className="shippingBody">
            <Navbar />
            <br /><br /><br /><br /><br />
            <div className="shipping-info-container">
                <h1>Shipping Information</h1>
                <p className="shipping-note">
                    Note: Delivery times may vary depending on the destination, customs processing, and unforeseen circumstances. Customs fees, import duties, and taxes are the responsibility of the recipient.
                </p>

                <div className="shipping-content">
                    
                    <div className="shipping-options">
                        <div className="option">
                            <img src={standardIcon} alt="Standard International Shipping" />
                            <h3>Standard International Shipping</h3>
                            <p>7-14 business days</p>
                        </div>
                        <div className="option">
                            <img src={expressIcon} alt="Express International Shipping" />
                            <h3>Express International Shipping</h3>
                            <p>3-7 business days</p>
                        </div>
                        <div className="option">
                            <img src={courierIcon} alt="Courier Service" />
                            <h3>Courier Service</h3>
                            <p>5-10 business days</p>
                        </div>
                    </div>

                   
                    <div className="shipping-faq">
                        <h2>Shipping times may vary depending on your location and the shipping method selected. 
                          Please note that delivery times are estimated and may be subject to delays beyond our control."</h2>
                        <h2>Customers are responsible for any additional customs charges. Delivery times for international 
                          orders may vary from 10-21 business days."</h2>
                        <h2>Orders placed before 12:00 PM are typically processed the same day. Orders placed after 12:00 PM or on weekends 
                          and holidays will be processed on the next business day</h2>
                        <h2>We accept returns within 30 days of purchase, provided the items 
                          are unused and in their original packaging.</h2>
                        <h2>If your return is approved, your refund will be processed, and a credit will automatically be applied to your 
                          original method of payment within a certain amount of days.</h2>
                        <h2>We are not responsible for items lost, stolen, or damaged in transit. If you encounter an issue with your order, 
                          please contact us so we can help you file a claim</h2>
                        <h2>We offer free standard shipping on orders over $50 . 
                          Please select the 'Free Shipping' option at checkout if your order qualifies</h2>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
