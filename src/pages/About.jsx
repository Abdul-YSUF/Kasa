import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import banner from '../assets/banner_about.png';
import about from '../data/about.json';
import Dropdown from '../components/Dropdown';
import Footer from '../components/Footer';

const About = () => {
    return (
        <div>
           <Header/>
           <Banner image={banner} />
           <main className='about'>
           {about.map((dropdown) => (
                <Dropdown key={dropdown.id} title={dropdown.title} description={dropdown.description} />))
            }
            </main>
           <Footer/>
        </div>
    );
};

export default About;