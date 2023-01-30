import React from 'react';
import "../style/Footer.css";
import logo from '../assets/logo_footer.svg';

const Footer = () => {
    return (
    <footer className='footer'>
      <img src={logo} alt="logo"/>
      <p className='footer_texte'>© 2020 Kasa. All rights reserved</p>
    </footer>
    );
};

export default Footer;