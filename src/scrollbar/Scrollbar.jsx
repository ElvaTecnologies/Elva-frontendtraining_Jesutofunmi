import React, {  useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";



// import required modules
import { Navigation } from "swiper";
import Card from './Card'
const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast'


const Scrollbar =() =>{
  const [data, setData] =useState([]);

  const getFood = async ()=> {
    const response = await fetch(url);
    const data = await response.json() 
    setData(data.meals);
}

useEffect(()=>{
    getFood();
}, [])

  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        slidesPerGroup={1}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {data.map((food) =>{
          const {strMeal, strMealThumb, idMeal} = food;
          return <SwiperSlide>
            <Card key={idMeal} text={strMeal} url={strMealThumb}/> 
          </SwiperSlide>
        })}
      
      </Swiper>
    </>
  );
}

export default Scrollbar