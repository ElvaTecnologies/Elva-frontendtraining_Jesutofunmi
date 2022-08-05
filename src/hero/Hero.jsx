import React from 'react';
import Dish from '../image/Dish.png';
import Tomato from '../image/Tomato.png';
import {CgMathPercent} from 'react-icons/cg';
import first from '../image/first.jpeg'
import second from '../image/second.jpeg'
import third from '../image/third.jpg'


const Hero = () => {
  return (
    <section className='hero'>
      <div className="hero-text">
        <p>it&rsquo;s not just Food, It&rsquo;s an Experience.</p>
        <div className="hero-button">
          <button>View Menu</button>
          <button className='white-button'>Book A Table</button>
        </div>
        <div className="reviews">
          <p>reviews</p>
          <div className="review-img">
            <img className="rounded" src={first} alt="first" />
            <img className="rounded" src={second} alt="second" />
            <img className="rounded" src={third} alt="third" />
            <div className="rounded last"><span>45+</span></div>
          </div>
          <div className="five-stars">
          ★★★★★
          </div>
        </div>
      </div>
      <div className="hero-img">
        <div className="tag">
          <h4>5%</h4>
          <p><span>Discount</span> for 2 orders</p>
        </div>
        <CgMathPercent className='percent-icon'/>
        <img className='dish' src={Dish} alt="plate" />
        <img className='tomato' src={Tomato} alt="tomato" />
      </div>
    </section>
  )
}

export default Hero