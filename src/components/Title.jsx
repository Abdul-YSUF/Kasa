import React from "react";
import "../style/Title.css"

const Title = ({title, location}) => {
  return (
  <>
  <h1 className="title_logement">{title}</h1>
  <h3 className="location">{location}</h3>
  </>
  )
};

export default Title;