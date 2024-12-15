// import React from "react";
import group from "../../assets/group.svg";
import search from "../../assets/search.svg";
import timer from "../../assets/timer.svg";
import trophy from "../../assets/trophy.svg";
import rating from "../../assets/kid_star.svg"
import * as s from "./index";
import { themeData } from "../../data/theme-data";
import { useNavigate } from "react-router-dom";

const InfoCard = ({ className, data }) => {
  const navigate = useNavigate();
  const { imageUrl, themeName, cafeName, info, id } = data;


  // 카드 클릭 시 상세 페이지로 이동하는 함수
  const handleCardClick = () => {
    // id를 사용하여 상세 페이지로 이동
    navigate(`/theme/${id}`);
  };

  return (
    <s.StyledInfoCard className={className} onClick={handleCardClick}>
      <img className="thumbnail" src={imageUrl} alt={themeName} style={{cursor: 'pointer'}} />

      <div style={{ display: "flex", flexDirection: "column", gap: "21px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <div className="title">{themeName}</div>
          <div className="subtitle">{cafeName}</div>
        </div>

        <div className="info-container">

        <div className="info-item">
            <img src={rating} alt="Rating" />
            <span>{info.rating}</span>
          </div>

          <div className="info-item">
            <img src={search} alt="Search" />
            <span>{info.genre}</span>
          </div>

          <div className="info-item">
            <img src={timer} alt="Timer" />
            <span>{info.time}</span>
          </div>

          <div className="info-item">
            <img src={group} alt="Group" />
            <span>{info.players}</span>
          </div>

          <div className="info-item">
            <img src={trophy} alt="Trophy" />
            <span>{info.award}</span>
          </div>
        </div>
      </div>
    </s.StyledInfoCard>
  );
};

export default InfoCard;
