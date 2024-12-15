// src/components/Screen/style.js
import styled from "styled-components";

export const ScreenContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const BackButton = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  position: absolute;
  left: 144px;
  top: 120px;
  color: #0f0f0f;
  cursor: pointer;

  img {
    width: 24px;
    height: 24px;
  }

  .span {
    color: #0f0f0f;
    font-size: 14px;
    font-weight: 400;
    line-height: 140%;
  }
`;

export const MainContent = styled.div`
  position: absolute;
  left: 144px;
  top: 208px;
  width: 422px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ImageSection = styled.div`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 16px;
  height: 560px;
`;

export const ReservationButton = styled.button`
  width: 100%;
  padding: 20px;
  background: #1c1c1e;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  cursor: pointer;
`;

export const InfoSection = styled.div`
  position: absolute;
  top: 224px;
  left: 606px;
`;

export const Title = styled.h1`
  color: 000;
  font-size: 32px;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: 0.32px;
`;

export const SubTitle = styled.h2`
  color: #686868;
  font-size: 18px;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0.18px;
`;

export const IconGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const IconItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  img {
    width: 32px;
    height: 32px;
  }

  span {
    color: #686868;
    font-size: 16px;
    font-weight: 500;
    line-height: 140%;
    letter-spacing: 0.16px;
  }
`;


export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;


