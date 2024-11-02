import React from "react";
import karachi from '../images/karachi.png'
import Footer from '../FooterEnd/FooterEnd'
import contactUs from '../images/contactUs.jpeg';

export default function Location() {
    return(
       <div className="location-body">
        <img src={contactUs} style={{marginTop:'70px', marginBottom:'100px',width:'100%', height:'250px'}}></img>

        <div className="info_boxes" style={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
        <h2 classname="contact_info" style={{fontFamily:'San-Serif',fontSize:'35px',padding:'50px 0 100px 50px', width:'150px', color:'#79586f',}}>GET IN TOUCH</h2>

        <div style={{display:'flex', flexWrap:'wrap',justifyContent:'center',padding:'20px',margin:'20px', width:'230px',color:'white', backgroundColor:'#b687a8'}}>
            <p style={{fontSize:'20px', fontWeight:'bold'}}>Office Address:</p>
            <p>GlowQuester 
            1234 Babar Street, Suite 567
            Karachi, Pakistan</p>
        </div>
        <div style={{display:'flex', flexWrap:'wrap',justifyContent:'center', padding:'20px', margin:'20px',color:'white', width:'230px', backgroundColor:'#b687a8'}}>
            <p style={{fontSize:'20px', fontWeight:'bold'}}>Communication:</p><p style={{fontSize:'18px'}}>0812-8136245<br/></p>
            {/* <p style={{fontSize:'20px', fontWeight:'bold'}}>Email:</p><p>glowquester@gmail.com</p> */}
        </div>
        <div style={{display:'flex', flexWrap:'wrap',justifyContent:'center', padding:'20px',margin:'20px',color:'white', width:'230px', backgroundColor:'#b687a8'}}>
            <p style={{fontSize:'20px', fontWeight:'bold'}}>Customer Service</p>
            <p>Our customer support team is available Monday to Friday, 9:00 AM - 5:00 PM (EST).</p>
        </div>

        <div style={{backgroundColor:'#b687a8', width:'900px',margin:'170px 0', padding:'50px',display:'flex', flexWrap:'wrap', flexDirection:'row'}}>
        <div style={{backgroundColor:'#79586f', width:'500px'}}>
        <input type="text" id="name" name="name" placeholder="Enter your name" style={{backgroundColor:'#b687a8', border:'none', width:'400px', margin:'50px 0 10px 0'}}></input><br/>
        <input type="email" name="email" placeholder="Enter your email" style={{backgroundColor:'#b687a8', border:'none', width:'400px', margin:'0 0 10px 0'}}></input><br/>
        <textarea id="message" name="message" rows="4" cols="50" placeholder="Write your message here..." style={{backgroundColor:'#b687a8', border:'none', width:'400px', margin:'0 0 10px 0'}}></textarea><br/>
        <button type="submit" style={{backgroundColor:'#b687a8', padding:'10px 40px' , borderRadius:'0%', fontWeight:'bold',marginBottom:'50px'}}>SEND</button>
        </div>
        <div style={{padding:'50px'}}>
        <p style={{color:'#79586f', fontSize:'20px', paddingBottom:'20px'}}>Have any query?</p>
        <p style={{color:'white', fontSize:'40px', fontWeight:'bolder'}}>CONTACT US</p>
        <p style={{color:'#79586f', fontSize:'15px', paddingTop:'10px', width:'100px'}}>For any questions, concerns, or inquiries, please feel free to reach out to us via email at glowquester@gmail.com. Our team is here to help and will get back to you as soon as possible.</p>
        </div>
        </div>
        </div>


        {/* <div id="map" style={{height: '400px', width: '100%', backgroundColor:'white'}}></div> */}

        <Footer/>
       </div>
    );
}