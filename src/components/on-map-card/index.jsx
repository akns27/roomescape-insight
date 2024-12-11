// import React from "react";
import kidStar from "../../assets/kid_star.svg";
import locationOn from "../../assets/location_on.svg";
import * as s from "./index.js"



const OnMapCard = () => {
  return (
    <s.StyledCard>
      <div className="cafe-image" />
      <div className="content">
        <div className="cafe-name">카페 이름</div>
        <div className="info">
          <div className="info-item">
            <img className="icon" src={kidStar} alt="별점 아이콘" />
            <span className="text">별점</span>
          </div>
          <div className="info-item">
            <img className="icon" src={locationOn} alt="위치 아이콘" />
            <span className="text">위치</span>
          </div>
        </div>
      </div>
    </s.StyledCard>
  );
};

export default OnMapCard;