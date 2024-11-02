import React from 'react'
import location from './images/map-location.png'
import cream from './images/cream.png'
import derm from './images/medical.png'
import satisfied from './images/satisfied.png'

const Achievements = () => {
    return (
        <>
            <div className="achievement-section">
                <h1 className='main-heading'>ACHIEVEMENTS</h1>
                <div className="achievement-container">
                    <div className='achievements'>
                        <img src={location} width={80} alt=''></img>
                        <span>200 +</span>
                        <p>Serving Customers Across 200+ Locations</p>
                    </div>
                    <div className='achievements'>
                        <img src={cream} width={80} alt=''></img>
                        <span>200</span>
                        <p>Showcasing Over 200 Organic Products</p>
                    </div>
                    <div className='achievements'>
                        <img src={derm} width={80} alt=''></img>
                        <span>370</span>
                        <p>Backed by a Team of 370 Dermatologists</p>
                    </div>
                    <div className='achievements'>
                        <img src={satisfied} width={80} alt=''></img>
                        <span>32 K</span>
                        <p>Thriving Community of 32,000 Satisfied Customers</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Achievements