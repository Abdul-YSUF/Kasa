import { useEffect, useState } from "react";
import Banner from '../components/Banner';
import banner from '../assets/banner_accueil.png'
import Gallery from '../components/Gallery';

const Accueil = () => {
    const [logements, setLogements] = useState([]);

	useEffect(() => {
		fetch("../logement.json")
			.then((res) => res.json())
			.then((logementData) => setLogements(logementData))
			.catch((error) => console.log(error))
	});

    document.title = "Kasa - Accueil";

    return (
        <>
            <Banner image={banner} title="Chez vous, partout et ailleurs" />
            <section className="gallery_background">
                {logements.map((logement) => 
                    <Gallery key={logement.id} data={logement}/>
                )}
            </section>
        </>
    );
};

export default Accueil;