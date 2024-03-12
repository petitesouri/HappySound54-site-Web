import React, { useState, useEffect } from 'react';

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import avisData from "../data/avis.json";
import ArrowLeft from "../images/left-arrow.png";
import ArrowRight from "../images/right-arrow.png";

const Avis = () => {
    const [avis, setAvis] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [translateValue, setTranslateValue] = useState(0);

    useEffect(() => {
        setAvis(avisData.avis);
    }, []);
    
    const nextSlide = () => {
        const nextIndex = (currentSlide + 1) % avis.length;

        setCurrentSlide((currentSlide + 1) % avis.length);
        setTranslateValue(translateValue - 350);
        if (nextIndex === avis.length - 1) {
            setCurrentSlide(0);
            setTranslateValue(0);
        }
    };
    
    const prevSlide = () => {
        const prevIndex = (currentSlide - 1 + avis.length) % avis.length;
        setCurrentSlide((currentSlide - 1 + avis.length) % avis.length);
        setTranslateValue(translateValue + 350);
        if (prevIndex === 0) {
            setCurrentSlide(avis.length - 1);
            setTranslateValue(avis.length - 1);
        }
    };
    
    const goToSlide = (index) => {
        setCurrentSlide(index);
        setTranslateValue(index * -350);
    };
  
    return ( 
        <div className="slider-container">
            <div 
                className="slider" 
                style={{ 
                    transition: 'transform 0.5s ease', 
                    transform: `translateX(${translateValue}px)` 
                    }}>
                {avis.map((avisItem, index) => (
                <figure
                    key={index}
                    className={index === currentSlide ? "slider-items active" : "slider-items"}
                >
                    <p className='slider-items__text'>{avisItem.texte}</p>
                    <p className='slider-items__author'>- {avisItem.auteur}</p>
                </figure>
                ))}
            </div>
            <button className="prev" onClick={prevSlide}><img src={ArrowLeft} alt="Prev" /></button>
            <button className="next" onClick={nextSlide}><img src={ArrowRight} alt="Next" /></button>
            <div className="dots">
                {avis.map((_, index) => (
                <span
                    key={index}
                    className={index === currentSlide ? "dot active" : "dot"}
                    onClick={() => goToSlide(index)}
                />
                ))}
            </div>
        </div>
    );
  }

export default Avis;
