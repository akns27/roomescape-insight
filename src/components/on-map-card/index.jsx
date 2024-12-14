// import React from "react";
import kidStar from "../../assets/kid_star.svg";
import locationOn from "../../assets/location_on.svg";
import * as s from "./index.js"


const OnMapCard = ({data}) => {
  const {imgUrl, cafeName, rating, location} = data;
  return (
    <s.StyledCard>
      <img className="cafe-image" src={imgUrl} alt={cafeName}/>
      <div className="content">
        <div className="cafe-name">{cafeName}</div>
        <div className="info">
          <div className="info-item">
            <img className="icon" src={kidStar} alt="별점 아이콘" />
            <span className="text">{rating}</span>
          </div>
          <div className="info-item">
            <img className="icon" src={locationOn} alt="위치 아이콘" />
            <span className="text">{location}</span>
          </div>
        </div>
      </div>
    </s.StyledCard>
  );
};

export default OnMapCard;