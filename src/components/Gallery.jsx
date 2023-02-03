import React from 'react';
import '../style/Gallery.css'
import { Link } from 'react-router-dom';

const Gallery = ({data}) => {
    const {id, title, cover} = data;
    return (
    <article>
        <Link to={`/logement/${id}`} className='gallery'>
            <img src={cover} alt={title} className='gallery_img'/>
            <div className="gallery_div"></div>
            <h2>{title}</h2>
        </Link>
    </article>
    );
};

export default Gallery;