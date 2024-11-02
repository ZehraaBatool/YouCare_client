import React, { useState } from 'react';
import video1 from '../images/skincarevideo.mp4';
import '../App.css';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

export default function MainVideo() {
    return (
        <div className="video-background-container" sx={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
          <video autoPlay muted loop
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
          position: 'absolute',
          top: 0,
          left: 0,
        }} className="video-background">
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'black',
          zIndex: 1,
        }}
      >
        <Box sx={{ textAlign: 'center', paddingTop: '50px' }} className="hero-container">
          <h1 className="hero-main-heading">
            Discover a <span style={{color:"#000", fontStyle:"italic"}}>healthy </span>skincare routine.
          </h1> 
          
          <p className='hero-sub-heading'>
          Our lightweight product replenishes and balances the skin with its complex blend of anti-oxidants, vitamins, hydrating and natural ingredients.
          </p>
          
          
          <Link to="/catalog"><button className='home-btn' style={{marginBottom: "3em"}}>Shop now</button></Link>
        </Box>
      </Box>
    </div>
  );
};
