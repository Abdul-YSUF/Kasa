import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../style/Logement.css";
import Carrousel from "../components/Carrousel";
import Dropdown from "../components/Dropdown";
import Host from "../components/Host";
import Rate from "../components/Rate";
import Title from "../components/Title";
import Tags from "../components/Tags";

const Logement = () => {
  const { id } = useParams();
  const [logement, setLogement] = useState({});

  useEffect(() => {
    fetch("../logement.json")
      .then((res) => res.json())
      .then((article) => {
        const data = article.find((item) => item.id === id);
        setLogement(data);
      })
      .catch((error) => error);
  });

  const {
    title,
    location,
    pictures,
    rating,
    host,
    tags,
    description,
    equipments,
  } = logement;

  return (
    <>
      <Carrousel pictures={pictures}></Carrousel>
      <div className="logement_div">
        <div className="logement_title_tags">
          <Title title={title} location={location} />
          <Tags tags={tags} />
        </div>
        <div className="logement_rate_host">
          <Host host={host} />
          <Rate rating={rating} />
        </div>
      </div>
      <div className="logement_dropdown">
        <ul>
          <li>
            <Dropdown title="Description" description={description}></Dropdown>
          </li>
          <li>
            <Dropdown title="Équipements" description={equipments}></Dropdown>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Logement;