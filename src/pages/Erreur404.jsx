import React from 'react';
import Header from '../components/Header'
import { Link } from 'react-router-dom';
import '../style/Erreur.css';

const Erreur404 = () => {
    return (
    <div className="error">
      <Header />
      <h1 className="erreur">404</h1>
      <span className="erreur_description">
        Oups! La page que vous demandez n'existe pas.
      </span>
      <Link to="/" className="erreur_retour">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
};

export default Erreur404;