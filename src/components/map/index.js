import styled from "styled-components";

export const MapContainer = styled.div`
  position: relative;
`;

export const KakaoMap = styled.div`
  width: 80%;
  height: 560px;
  border-radius: 40px;
  /* background-color: #EAEAEA; */
  float: left;
  margin-left: 24px;
  margin-top: 28px;
  z-index: 0;

  & > div {
    border-radius: inherit;
  }
`;

export const OnMapCardWrapper = styled.div`
  /* 고정된 너비 설정 */
  position: absolute; // 절대 위치 설정
  top: 460px;        
  right: 0.8%;      
  width: 80%;
  float: left;
  & > *:first-child {
    padding-left: 32px;
  }

  & > *:last-child {
    padding-right: 32px;
  }


`;

export const OnMapCardGrid = styled.div`
  display: flex;
  gap: 16px;
  overflow-x: auto;
  white-space: nowrap;
  z-index: 10;

  &::-webkit-scrollbar {
    background: transparent;
  }

  padding: 15px 0;
  margin: -15px 0; //negative margin으로 상쇠

`;
