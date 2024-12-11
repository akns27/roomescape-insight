// import React from "react";
import group from "../../assets/group.svg";
import search from "../../assets/search.svg";
import timer from "../../assets/timer.svg";
import trophy from "../../assets/trophy.svg";
import * as s from "./index" 



const InfoCard = ({ className }) => {
  return (
    <s.StyledInfoCard className={className}>
      <img 
        className="thumbnail" 
        src="https://github.com/akns27/EssetStorage/blob/master/%E1%84%86%E1%85%A7%E1%86%AF%E1%84%8C%E1%85%A9%E1%86%BC%E1%84%8B%E1%85%B1%E1%84%80%E1%85%B5%E1%84%8C%E1%85%A9%E1%86%BC%E1%84%90%E1%85%A1%E1%86%B7%E1%84%89%E1%85%A1%E1%84%83%E1%85%A2.jpg?raw=true" 
        alt="멸종위기종 탐사대" 
      />
      
      <div className="title">멸종위기종 탐사대</div>
      <div className="subtitle">지구별 방탈출 홍대라스트시티점</div>
      
      <div className="info-container">
        <div className="info-item">
          <img src={trophy} alt="Trophy" />
          <span>2023 최고의 액션/어드벤쳐</span>
        </div>
        
        <div className="info-item">
          <img src={search} alt="Search"/>
          <span>모험</span>
        </div>
        
        <div className="info-item">
          <img src={timer} alt="Timer" />
          <span>60분</span>
        </div>
        
        <div className="info-item">
          <img src={group} alt="Group" />
          <span>2-4인</span>
        </div>
      </div>
    </s.StyledInfoCard>
  );
};

export default InfoCard;