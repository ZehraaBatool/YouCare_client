import React from 'react'
import image1 from './images/flask.png'
import image2 from './images/vegan.png'
import image3 from './images/ecofriendly.png'
import image4 from './images/bottle.png'
import image5 from './images/tested.png'
import './App.css';

const properties=[
    {
        name:"Cruelty-Free",
        icon:image1
    },
    {
        name:"Eco-Friendly",
        icon:image2
    },
    {
        name: "Effective Formulas",
        icon:image3
    },
    {
        name: "Hydration Boost",
        icon:image4
    },
    {
        name: "Dermatologically tested",
        icon: image5
    }
]

export default function Properties() {
  return (
    <div className='specialSection'>
        <ul className='prop-container'>
            {properties.map(prop=>(
                <li className='prop-item'>
                    <img src={prop.icon} alt="" />
                    <p className='prop-title'>{prop.name}</p>
                </li>
            ))}
        </ul>
        
        {/* <h2>What Makes Our Skincare <span >Truly Special</span></h2>
        <div className='specialComponent'>
            <div className='specialItem'>
                <img src={image1}  width={120} height={120} alt='minimalist'>
                </img>
                <p>Minimalist Formulations</p>
            </div>
            <div className='specialItem'>
                <img src={image2}  width={120} height={140} alt='Vegan'>
                </img>
                <p>Vegan</p>
            </div>
            <div className='specialItem'>
                <img src={image3}  width={120} height={140} alt='ecofriendly'>
                </img>
                <p>Eco Friendly</p>
            </div>
            <div className='specialItem'>
                <img src={image4}  width={120} height={120} alt='natural'>
                </img>
                <p>Natural and Organic</p>
            </div>

        </div> */}

    </div>
  )
}
