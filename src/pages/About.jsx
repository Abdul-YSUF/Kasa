import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import banner from '../assets/banner_about.png';
import Footer from '../components/Footer';

const About = () => {
    return (
        <div>
           <Header />
           <Banner image={banner} />
           <Footer/>
        </div>
    );
};

export default About;