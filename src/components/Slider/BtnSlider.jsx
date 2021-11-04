import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import "./Slider.scss";

export default function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn__slide btn__next" : "btn__slide btn__prev"}
    >
      {direction === "next" ? <IoIosArrowForward className="btn__icon" size="25px" /> : <IoIosArrowBack className="btn__icon" size="25px" />}
    </button>
  );
}