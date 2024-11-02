import React from 'react'
import cleanser from "./images/cleanser1.png"
import moisturizer from "./images/moisturizer1.png"
import serum from "./images/serum1.png"
import sunscreen from "./images/sunscreen1.png"
import { Link } from 'react-router-dom'

const products=[
    {
        href:"cleansers",
        title:"Cleansers",
        image:cleanser
    },
    {
        href:"moisturizers",
        title:"Moisturizers",
        image:moisturizer
    },
    {
        href:"serums",
        title:"Serums",
        image:serum
    },
    {
        href:"sunscreen",
        title:"Sunscreens",
        image:sunscreen
    }
]

const OurProducts = () => {
  return (
    <div className="our-products-section">
        <h1 className="main-heading">Our Products</h1>
        <div className="our-products-container">
            {products.map((prod,i)=>(
                <div className="our-product">
                    <Link to={`/skincare/${prod.href}`} >
                    <img src={prod.image} alt="" />
                    <div className="our-product-details">
                        <p className="our-product-title">{prod.title}</p>
                        <span>&gt;</span>
                    </div>
                </Link>
                </div>
            ))}
            
        </div>
    </div>
  )
}

export default OurProducts