import React from "react";
import filledStar from "../assets/filled_star.svg";
import noneFilledStar from "../assets/none_filled_star.svg";
import "../style/Rate.css";

const Rate = ({ rate }) => {
  const NumberOfStars = [1, 2, 3, 4, 5];
  return (
    <div className="rate">
      {NumberOfStars.map((stars) =>
        rate.rating >= stars ? (
          <img className="filled_stars" src={filledStar} alt="" />
        ) : (
          <img className="nonefilled_stars" src={noneFilledStar} alt="" />
        )
      )}
    </div>
  );
};

export default Rate;