import React, { useState } from "react";
import "../style/Carrousel.css";
import arrow_right from "../assets/arrow_right.png";
import arrow_left from "../assets/arrow_left.png";

function Carrousel({ pictures }) {
  const [slide, setSlide] = useState(0);

  const previousSlide = () => {
    setSlide(
      slide === 0 ? pictures.length -1 : slide -1
    )
  }

  const nextSlide = () => {
    setSlide(
      slide === pictures.length -1 ? 0 : slide + 1
    )
  }

  return (
    <div className="carrousel">
      {pictures?.length > 1 && (
        <img className="arrow arrow_left" src={arrow_left} alt="" onClick={previousSlide}/>
      )}
      {pictures?.map((picture, index) => {
        return (
          <img key={index} className={index === slide ? "carrousel_img actif" : "carrousel_img"} src={picture} alt=""/>
        );
      })}
      {pictures?.length> 1 && (
        <img className="arrow arrow_right" src={arrow_right} alt="" onClick={nextSlide}/>
      )}
    </div>
  );
}

export default Carrousel;