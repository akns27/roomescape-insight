import React from "react";
import styled from "styled-components";
import search from "../../assets/search.svg";

// 헤더 컨테이너 스타일
const StyledHeader = styled.div`
  background-color: #1c1c1e;
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;

  // 로고 컨테이너
  .logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #ffffff;
    font-size: 20px;
    line-height: 28px;
  }

  // 검색창 스타일
  .search-container {
    background-color: #ffffff;
    border-radius: 12px;
    height: 40px;
    width: 275px;
    display: flex;
    align-items: center;
    padding: 8px;
  }

  .search-icon {
    height: 24px;
    width: 24px;
  }
`;

export const Header = () => {
  return (
    <StyledHeader>
      <div className="logo">
        <div>방탈출</div>
        <div>인사이트</div>
      </div>
      <div className="search-container">
        <img className="search-icon" alt="Search" src={search} />
      </div>
    </StyledHeader>
  );
};