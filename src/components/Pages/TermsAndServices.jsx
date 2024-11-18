import React, {useEffect} from 'react';
import './TermsAndServices.css';
import image3 from '../images/Glow quester (1).png';
import Footer from '../FooterEnd/FooterEnd';

export default function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='Faqsbody'>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {/* <div className='image-container'>
        <img src={image3} alt='Glow' className='full-width-image' />
      </div> */}
      <div className='content'>
        <h1 className='title'>Terms & Conditions</h1>
        
        <section className='section'>
          <h2>1. Introduction</h2>
          <ol>
            <li>This website is owned and operated by <strong>GlowQuester Pvt. Ltd.</strong>. Throughout the site, the terms “we”, “us”, and “our” refer to <strong>GlowQuester Ltd.</strong>.</li>
            <li>By visiting our site and/or purchasing something from us, you engage in our “Service” and agree to be bound by the following terms and conditions (“Terms and Conditions”), including any additional terms and conditions and policies referenced herein and/or available by hyperlink.</li>
            <li>We may update our Terms and Conditions periodically; each time you place an order on our website, you will be agreeing to the latest version of our Terms and Conditions.</li>
          </ol>
        </section>

        <section className='section'>
          <h2>2. About Us</h2>
          <ol>
            <li>Our registered office is located at <strong>xxx, Karachi, Sindh</strong>.</li>
            <li>If you have any problems placing your order on our website or require support after placing an order, please contact us by calling <strong>+92 000 0001</strong> or sending an email to <strong>support@GlowQuester.com</strong>.</li>
          </ol>
        </section>

        <section className='section'>
          <h2>3. Acceptance of Terms</h2>
          <ol>
            <li>By using our site, you affirm that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province and you have given us your consent to allow any of your minor dependents to use this site.</li>
            <li>You agree to provide accurate, current, and complete information about yourself as prompted by our registration forms.</li>
            <li>We reserve the right to refuse service, terminate accounts, remove or edit content, or cancel orders at our sole discretion.</li>
          </ol>
        </section>

        <section className='section'>
          <h2>4. User Responsibilities</h2>
          <ol>
            <li>You agree to use our site only for lawful purposes and in a manner that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the site.</li>
            <li>You are prohibited from violating or attempting to violate the security of the site, including, without limitation, accessing data not intended for you or logging into a server or account that you are not authorized to access.</li>
            <li>You may not engage in any conduct that restricts or inhibits anyone's use or enjoyment of the site, or which, as determined by us, may harm GlowQuester DermaCare Pvt. Ltd. or users of the site or expose them to liability.</li>
          </ol>
        </section>

        <section className='section'>
          <h2>5. Privacy Policy</h2>
          <p>Your privacy is important to us. Please review our <a href="/privacy-policy">Privacy Policy</a> to understand our practices regarding the collection, use, and disclosure of personal information.</p>
        </section>

        <section className='section'>
          <h2>6. Product Information</h2>
          <p>We strive to provide accurate product descriptions and images. However, we do not warrant that product descriptions or other content on this site is accurate, complete, reliable, current, or error-free.</p>
          <p>Prices for our products are subject to change without notice. We reserve the right to discontinue any product at any time.</p>
        </section>

        <section className='section'>
          <h2>7. Limitation of Liability</h2>
          <p>In no event shall GlowQuester DermaCare Pvt. Ltd. or its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation loss of profits, data, use, goodwill, or other intangible losses, resulting from:</p>
          <ol>
            <li>Your access to or use of (or inability to access or use) the service.</li>
            <li>Any conduct or content of any third party on the service.</li>
            <li>Any content obtained from the service.</li>
            <li>Unauthorized access, use, or alteration of your transmissions or content.</li>
          </ol>
        </section>

        <section className='section'>
          <h2>8. Changes to Terms</h2>
          <p>We reserve the right to update or modify these Terms at any time. Your continued use of the Service after any changes constitutes acceptance of those changes.</p>
        </section>

        {/* <section className='section'>
          <h2>9. Contact Information</h2>
          <p>If you have any questions about these Terms, please contact us at:</p>
          <p>Email: <strong>support@fuzedskincare.com</strong></p>
          <p>Phone: <strong>+92 000 0001</strong></p>
        </section> */}
<br></br>
<br></br>
      </div>

      <Footer />
    </div>
  );
}
