import React from 'react'
import { Box } from '@mui/material';
import MainVideo from '../home/MainVideo';
import Properties from '../Properties';
import QuizSection from '../home/QuizSection';
import Description from '../Description.js'
import TopPicks from '../TopPicks.js'
import Services from '../Services.js'
import Achievements from '../Achievements.js';
import OurProducts from '../OurProducts.js';
import Footer from '../FooterEnd/FooterEnd.jsx';

const Home = () => {
  return (
    <>
    <MainVideo />
      <Properties />
      <div className="home-section">
    <QuizSection />
      </div>
      <div className="home-section">
      <TopPicks />
      </div>
   
    <div className="home-section">
      <Services />
    </div>
    <div className="home-section">
      <OurProducts />
    </div>
    <div className="home-section">
      <Description />
    </div>
    <div className="home-section">
      <Achievements />
    </div>
  
    <Box>
      <Footer />
    </Box>
    </>
    
  )
}

export default Home