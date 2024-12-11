import React from "react";
import styled from "styled-components";
import kidStar from "../../assets/kid_star.svg";
import locationOn from "../../assets/location_on.svg";

// 카드 컨테이너 스타일링
const StyledCard = styled.div`
  /* 카드 기본 스타일 */
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0px 5px 15px 2px rgba(0, 0, 0, 0.1);
  padding: 16px;
  display: flex;
  gap: 16px;

  /* 이미지 플레이스홀더 스타일 */
  .cafe-image {
    background-color: #d1d1d1;
    border-radius: 8px;
    width: 72px;
    height: 72px;
  }

  /* 컨텐츠 영역 스타일 */
  .content {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  /* 카페 이름 스타일 */
  .cafe-name {
    font-size: 16px;
    font-weight: 700;
    color: #000000;
  }

  /* 정보 영역 스타일 */
  .info {
    display: flex;
    gap: 8px;
  }

  /* 아이콘과 텍스트 그룹 스타일 */
  .info-item {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  /* 아이콘 스타일 */
  .icon {
    width: 16px;
    height: 16px;
  }

  /* 텍스트 스타일 */
  .text {
    font-size: 12px;
    color: #676767;
  }
`;

// 카페 카드 컴포넌트
export const OnMapCard = () => {
  return (
    <StyledCard>
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
    </StyledCard>
  );
};