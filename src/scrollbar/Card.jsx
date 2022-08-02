import React from 'react';
import {BsCartDash} from 'react-icons/bs';
import image from '../image/Dish.png'

const Card = ({text, url}) => {
  text = text? text: "some text";
  image= url? url: image;
  return (
    <div className='card'>
        <div className="box">
          <p>{text}</p>
        </div>
        <div className="plate">
          <img src={image} alt="text" />
        </div>
        <div className="cart">
          <BsCartDash/>
        </div>
    </div>
  )
}

export default Card