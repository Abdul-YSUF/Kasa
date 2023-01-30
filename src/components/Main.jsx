import React from 'react';
import '../style/Main.css'
import { Link } from 'react-router-dom';

const Main = (props) => {
    return (
    <article>
        <Link to={`/logement/${props.id}`} className='gallery'>
            <img src={props.cover} alt={props.title} className='gallery_img'/>
            <div className="gallery_div"></div>
            <h2>{props.title}</h2>
        </Link>
    </article>
    );
};

export default Main;