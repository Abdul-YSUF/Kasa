import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import banner from '../assets/banner_accueil.png'
import Gallery from '../components/Gallery';
import {data} from '../logement/fiche'
import Footer from '../components/Footer';

const Accueil = () => {
    return (
        <div>
            <Header />
            <Banner image={banner} title="Chez vous, partout et ailleurs" />
            <section className="gallery_background">
                {data.map((logement) => {
                    return <Gallery key={logement.id} id={logement.id} cover={logement.cover} title={logement.title} />
                })}
            </section>
            <Footer />
        </div>
    );
};

export default Accueil;