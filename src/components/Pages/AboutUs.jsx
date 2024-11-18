import React, { useEffect } from "react";
import about_image from '../images/pint2.png';
import about_image2 from '../images/pint1.png';
import './AboutUs.css';
import Footer from '../FooterEnd/FooterEnd';

export default function AboutUs() {

  // Scroll to the top on component load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="AboutusBody">
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>About GlowQuester</h1>
      <p><strong>GlowQuester</strong> is a personalized skincare platform offering tailored product recommendations through an interactive quiz. It features secure user accounts, a product catalog, cart management, and order tracking. With an easy-to-use interface, 
      GlowQuester ensures a smooth skincare shopping experience. GlowQuester is an innovative, personalized skincare platform that empowers users to find products specifically suited to their unique skin needs. Through an interactive and insightful quiz, GlowQuester analyzes individual skin types, concerns, and goals to recommend curated skincare products.
        The platform provides:</p>
      <br />
      <div className='image-container'>
        <img src={about_image} alt='Glow' className='full-width-image' />
        <article>
          <h2>At GlowQuester</h2>
          <p>At <b>GlowQuester</b>, we offer a curated selection of premium cosmetics that cater to all your beauty needs.
            Our products are crafted with the highest quality ingredients to ensure effectiveness and purity. Each item is designed to enhance your natural beauty and provide a touch of elegance to your daily routine. Experience the difference with GlowQuester, 
            where every product is a step toward a more radiant you.</p>
        </article>
      </div>
      <h1>Our Principles</h1>
      <div className="box-container">
        <div className="box">
          <h3>Exceptional Quality</h3>
          <p>We pride ourselves on the quality of every product we create. Our skincare solutions are crafted to deliver superior results you can trust, 
            helping your skin look and feel its best.</p>
        </div>
        <div className="box">
          <h3>Transparency</h3>
          <p>We believe that great skincare starts with great ingredients. That's why we source 
            only the finest, scientifically-backed ingredients.</p>
        </div>
        <div className="box">
          <h3>Best Ingredients</h3>
          <p>Honesty is at the heart of what we do. We’re committed to full transparency, sharing 
            everything from our ingredients to our formulation process.</p>
        </div>
      </div>

      <div className='image-container2'>
        <img src={about_image2} alt='Glow' className='full-width-image' />
        <article>
          <h2>Our Mission</h2>
          <p>At <b>GlowQuester</b>, our mission is to empower individuals to achieve healthy, radiant skin through science-based skincare solutions. We are dedicated to providing high-quality, transparent, and effective products that enhance natural beauty while promoting sustainable practices. Our goal is to educate and inspire our community to make informed skincare choices, embracing self-care 
            as a journey towards confidence and well-being.</p>
        </article>
      </div>
      <Footer />
    </div>
  );
}
