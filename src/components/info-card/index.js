import styled from "styled-components";

export const StyledInfoCard = styled.div`
  // 카드 기본 스타일
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0px 8px 10px -8px #0000141a, 0px 5px 20px -8px #0000141a;
  width: 276px;
  padding: 13px;



  .thumbnail {
    width: 100%;
    height: 189px;
    border-radius: 16px;
    margin-bottom: 14px;
    object-fit: cover;
  }

  .title {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 4px;
  }



  .subtitle {
    font-size: 14px;
    color: #676767;
    margin-bottom: 16px;
  }

  .info-container {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }


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