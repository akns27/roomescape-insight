import styled from "styled-components";


export const SidebarContainer = styled.div`
  background-color: #ffffff;
  width: 252px;
  padding: 16px;
  border-right: 1px solid #e5e7eb;
`;

export const Section = styled.section`
  margin-bottom: 32px;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const InputGroup = styled.div`
  margin-bottom: 16px;
`;

export const Label = styled.label`
  display: block;
  font-size: 14px;
  margin-bottom: 8px;
`;

export const SearchInputWrapper = styled.div`
  position: relative;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 8px 36px 8px 12px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  
  &::placeholder {
    color: #9ca3af;
  }
`;

export const SearchIcon = styled.span`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
`;

export const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

export const RatingButton = styled.button`
  width: 69px;
  padding: 8px 16px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  gap: 6px;
  background-color: white;
`;

export const Star = styled.span`
  color: #fbbf24;
`;

// 섹션 컨테이너
export const SliderSection = styled.div`
  width: 100%;
  max-width: 400px;
`;

// 기존 스타일 유지
export const SliderContainer = styled.div`
  position: relative;
  padding-top: 24px;
`;

export const SliderTrack = styled.div`
  width: 100%;
  height: 8px;
  background-color: #e5e7eb;
  border-radius: 4px;
  position: relative;
`;

// 진행 바 추가
export const SliderProgress = styled.div`
  position: absolute;
  height: 8px;
  background-color: black;
  border-radius: 4px;
  left: 0;
  width: ${props => props.percentage}%;
`;

export const SliderThumb = styled.div`
  position: absolute;
  width: 16px;
  height: 16px;
  background-color: black;
  border-radius: 50%;
  top: 20px;
  left: ${props => props.percentage}%;
  transform: translateX(-50%);
  cursor: pointer;
`;

export const SliderValue = styled.div`
  text-align: center;
  margin-top: 8px;
  font-size: 14px;
`;