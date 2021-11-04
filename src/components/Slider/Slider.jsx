import React, {useState} from 'react';
import BtnSlider from './BtnSlider';

import './Slider.scss';

export function Slider({ dataSlider }) {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    const dotLength = dataSlider.length;

    return (
        <>
            <div className="slider__container">
                {dataSlider.map((obj, index) => {
                    return (
                        <div
                        key={obj.id}
                        className={slideIndex === index + 1 ? "slider__slide slider__slide-active" : "slider__slide"}
                        >
                            <img
                            className="slider__img"
                            src={obj.src} 
                            alt={obj.alt}
                            />
                        </div>
                    )
                })}
                <BtnSlider moveSlide={nextSlide} direction={"next"} />
                <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

                <div className="dot__container">
                    {Array.from({length: dotLength}).map((item, index) => (
                        <div 
                        onClick={() => moveDot(index + 1)}
                        className={slideIndex === index + 1 ? "dot__item dot__item-active" : "dot__item"}
                        ></div>
                    ))}
                </div>
            </div>
        </>
    )
}