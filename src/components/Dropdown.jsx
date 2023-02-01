import { useState } from "react";
import "../style/Dropdown.css";
import arrow from "../assets/arrow.png";

const Dropdown = ({title, description}) => {

    const [open, setOpen] = useState(false);
    
    return (
        <div className="dropdown" id={`dropdown-${title}`}>
            <div className="dropdown_div">
                <div className="dropdown_title">{title}</div>
                <span className={`dropdown_arrow ${open}`} onClick={() => setOpen(!open)}>
                <img src={arrow} alt="Icône Flèche"/>
                </span>
            </div>
            {open && <div className="dropdown_description">{description}</div>}
        </div>
    );
};

export default Dropdown;