import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
          <Rate rate={rating} />
          <Host host={host} />
        </div>
      </div>
      <div className="logement_dropdown">
        <Dropdown title="Équipements" description={equipments}></Dropdown>
        <Dropdown title="Description" description={description}></Dropdown>
      </div>
    </>
  );
};

export default Logement;