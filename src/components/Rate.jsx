import React from "react";
import filledStar from "../assets/filled_star.svg";
import noneFilledStar from "../assets/none_filled_star.svg";
import "../style/Rate.css";

const Rate = ({ rating }) => {
  const NumberOfStars = [1, 2, 3, 4, 5];
  return (
    <div className="rate">
      {NumberOfStars.map((stars) =>
        rating >= stars ? (
          <img key={stars.toString()} className="filled_stars" src={filledStar} alt="" />
        ) : (
          <img key={stars.toString()} className="nonefilled_stars" src={noneFilledStar} alt="" />
        )
      )}
    </div>
  );
};

export default Rate;