import React from "react";
import styled from "styled-components";
import group from "../../assets/group.svg";
import search from "../../assets/search.svg";
import timer from "../../assets/timer.svg";
import trophy from "../../assets/trophy.svg";

// 카드 컨테이너 스타일링
const StyledInfoCard = styled.div`
  // 카드 기본 스타일
  background-color: #ffffff;
  border-radius: 16px;
  /* box-shadow: 0px 8px 10px -8px rgba(0, 0, 0, 0.1); */
  box-shadow: 0px 8px 10px -8px #0000141a, 0px 5px 20px -8px #0000141a;
  width: 276px;
  padding: 13px;

  // 이미지 스타일
  .thumbnail {
    width: 100%;
    height: 189px;
    border-radius: 16px;
    margin-bottom: 14px;
    object-fit: cover;
  }

  // 제목 스타일
  .title {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 4px;
  }

  // 부제목 스타일
  .subtitle {
    font-size: 14px;
    color: #676767;
    margin-bottom: 16px;
  }

  // 하단 정보 컨테이너
  .info-container {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }


  // 각 정보 아이템 스타일
  .info-item {
    display: flex;
    align-items: center;
    gap: 4px;
    
    img {
      width: 16px;
      height: 16px;
    }
    
    span {
      color: #676767;
      font-size: 12px;
    }
  }
`;

// 인포카드 컴포넌트
export const InfoCard = ({ className }) => {
  return (
    <StyledInfoCard className={className}>
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
    </StyledInfoCard>
  );
};