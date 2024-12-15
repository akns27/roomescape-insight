// import React from "react";
import kidStar from "../../assets/kid_star.svg";
import locationOn from "../../assets/location_on.svg";
import * as s from "./index.js";
import { themeData } from "../../data/theme-data.jsx";

const OnMapCard = ({ data }) => {
  const { imageUrl, cafeName, info, location } = data;
  return (
    <s.StyledCard>
      <img className="cafe-image" src={imageUrl} alt={cafeName} />
      <div className="content">
        <div className="cafe-name">{cafeName}</div>
        <div className="info">
          <div className="info-item">
            <img className="icon" src={kidStar} alt="별점 아이콘" />
            <span className="text">{info.rating}</span>
          </div>
        </div>
      </div>
    </s.StyledCard>
  );
};

export default OnMapCard;
