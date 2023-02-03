import React from "react";
import "../style/Host.css";

const Host = ({ host }) => {
  return (
    <div className="host">
      <p className="host_name">{host.name}</p>
      <img className="host_img" alt="" src={host.picture} />
    </div>
  );
};

export default Host;