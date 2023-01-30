import React from 'react';
import "../style/Banner.css";

const Banner = ({image, title}) => {
    return (
        <div className="banner">
            <img className="banner_img" src={image} alt="Banner"/>
            <h1 className="banner_title">{title}</h1>
        </div>
    )
}

export default Banner;