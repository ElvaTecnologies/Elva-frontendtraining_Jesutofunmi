import React from 'react'

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
            <div className="rounded first"></div>
            <div className="rounded second"></div>
            <div className="rounded third"></div>
            <div className="rounded last"><span>45+</span></div>
          </div>
          <div className="five-stars">
          ★★★★★
          </div>
        </div>
      </div>
      <div className="hero-img">
      </div>
    </section>
  )
}

export default Hero