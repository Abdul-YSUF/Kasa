import React from "react";
import "../style/Error.css";
import { NavLink } from "react-router-dom";

function Error() {
    return(
        <div className="error">
            <h1 className="erreur">404</h1>
            <span className="erreur_description">Oups! La page que vous demandez n'existe pas.</span>
            <NavLink to="/" className="erreur_retour">Retourner sur la page d’accueil</NavLink>
        </div>
    );
}

export default Error;