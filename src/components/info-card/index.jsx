// import React from "react";
import group from "../../assets/group.svg";
import search from "../../assets/search.svg";
import timer from "../../assets/timer.svg";
import trophy from "../../assets/trophy.svg";
import * as s from "./index" 
import { themeData } from "../../data/theme-data";



const InfoCard = ({ className, data }) => {
  const {imageUrl, title,location,info} = data;
  return (
    <s.StyledInfoCard className={className}>
      <img 
        className="thumbnail" 
        src={imageUrl} 
        alt={title} 
      />
      
      <div className="title">{title}</div>
      <div className="subtitle">{location}</div>
      
      <div className="info-container">
        <div className="info-item">
          <img src={trophy} alt="Trophy" />
          <span>{info.award}</span>
        </div>
        
        <div className="info-item">
          <img src={search} alt="Search"/>
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
      </div>
    </s.StyledInfoCard>
  );
};

export default InfoCard;

