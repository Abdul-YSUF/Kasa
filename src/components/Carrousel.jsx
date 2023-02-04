import React, { useState } from "react";
import "../style/Carrousel.css";
import fleche from "../assets/arrow_right.png"

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
        <img className="fleche fleche-gauche" src={fleche} alt="" onClick={previousSlide}/>
      )}
      {pictures?.map((picture, index) => {
        return (
          <img key={index} className={index === slide ? "carrousel-img actif" : "carrousel-img"} src={picture} alt="Logement"/>
        );
      })}
      {pictures?.length> 1 && (
        <img className=" fleche fleche-droite" src={fleche} alt="" onClick={nextSlide}/>
      )}
    </div>
  );
}

export default Carrousel;