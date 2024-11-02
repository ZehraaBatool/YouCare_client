import React, { useEffect, useState } from "react";
import image4 from '../images/Contact.png';
import Footer from '../FooterEnd/FooterEnd';
import './ContactPage.css';

export default function ContactPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    const [feedbackReceived, setFeedbackReceived] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFeedbackReceived(true);
    };

    return (
        <div className="contact-body">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className="contact-container">
                <div className="contact-info">
                    <h1>Let's have a conversation!</h1>
                    <p><strong>CONTACT US</strong><br /></p>
                    
                </div>

                <form onSubmit={handleSubmit} className="contact-form">
                    <input type="text" placeholder="Enter your name" name="name" required />
                    <input type="email" placeholder="Enter your valid address" name="email" required />
                    <textarea placeholder="Enter your message" name="message" rows="4" required></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
            {feedbackReceived && <p className="feedback-message">Thank you for your feedback!</p>}
            <br></br>
            <br></br>
            <Footer />
        </div>
    );
}
