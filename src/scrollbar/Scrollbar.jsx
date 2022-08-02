import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";
const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast'






const Scrollbar =() =>{
  const [data, setData] =useState([]);

  const getFood = async ()=> {
    const response = await fetch(url);
    const data = await response.json() 
    setData(data);
}

useEffect(()=>{
    getFood();
}, [])

console.log(data);

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        slidesPerGroup={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        
      
      </Swiper>
    </>
  );
}

export default Scrollbar