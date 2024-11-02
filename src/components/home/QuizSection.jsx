import React from 'react'
import quizSectionImg from "../images/quiz-section-img.png"
import {Link} from 'react-router-dom'

const QuizSection = () => {
  return (
    <div className="section-wrapper">
        <div className="sub-section">
            <h2 className="section-title">
            Find Your Perfect Skincare Routine
            </h2>
            <p className="section-desc">
            Discover what works best for your skin with our personalized skincare quiz. Answer a few questions to reveal your skin type and get tailored product recommendations just for you!
            </p>
            <Link to="/skintest">
            <button className="home-btn">Take Quiz</button>
            </Link>
        </div>
        <div className="sub-section quiz-img-subsection">
            <img className='quiz-section-img' src={quizSectionImg} alt="" />
        </div>
    </div>
  )
}

export default QuizSection