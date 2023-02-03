import React from 'react';
import Banner from '../components/Banner';
import banner from '../assets/banner_about.png';
import about from '../data/about.json';
import Dropdown from '../components/Dropdown';

const About = () => {
    return (
        <>
           <Banner image={banner} />
           <main className='about'>
           {about.map((dropdown) => (
                <Dropdown key={dropdown.id} title={dropdown.title} description={dropdown.description} />))
            }
            </main>
        </>
    );
};

export default About;