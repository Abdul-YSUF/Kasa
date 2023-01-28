import React from 'react';
import "../style/Banner.css";
import logo from '../assets/IMG.png';

const Banner = () => {
    return (
        <div>
            <img className="banner" src={logo} alt="Banner"/>
            <h1 className="title">Chez vous, partout et ailleurs</h1>
        </div>
    )
}

export default Banner;