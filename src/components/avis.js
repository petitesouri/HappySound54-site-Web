// import React, { useState, useEffect } from 'react';
import React from 'react';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import avisData from "../data/avis.json";
// import ArrowLeft from "../images/left-arrow.png";
// import ArrowRight from "../images/right-arrow.png";

const Avis = () => {
    // const [data, setData] = useState([]);
    // const [currentIndex, setCurrentIndex] = useState(0);
  
    // const handleNext = () => {
    //   setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
    // };
  
    // const handlePrev = () => {
    //   setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
    // };

    // const settings = {
    //     dots: true,
    //     speed: 500,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     infinite: true,
    //     prevArrow: <button><img src={ArrowLeft} alt="Prev" /></button>,
    //     nextArrow: <button><img src={ArrowRight} alt="Next" /></button>,
    // };
  
    return ( 
        <>  
        <h1>SLIDER</h1>     
        {/* <Slider {...settings} className='slider'>
            {avisData.avis.map(avis => (
                <div key={avis.id} className='slider-items'>
                    <p className='slider-items__text'>{avis.texte}</p>
                    <p className='slider-items__author'>- {avis.auteur}</p>
                </div>
            ))}
        </Slider> */}
        </>
    );
  }

export default Avis;
