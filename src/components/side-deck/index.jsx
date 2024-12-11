import React from "react";
import styled from "styled-components";

const SidebarContainer = styled.div`
  background-color: #ffffff;
  width: 252px;
  padding: 16px;
  border-right: 1px solid #e5e7eb;
`;

const Section = styled.section`
  margin-bottom: 32px;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const InputGroup = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  margin-bottom: 8px;
`;

const SearchInputWrapper = styled.div`
  position: relative;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 8px 36px 8px 12px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  
  &::placeholder {
    color: #9ca3af;
  }
`;

const SearchIcon = styled.span`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
`;

const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const RatingButton = styled.button`
  padding: 8px 16px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 4px;
  background-color: white;
`;

const Star = styled.span`
  color: #fbbf24;
`;

const SliderContainer = styled.div`
  position: relative;
  padding-top: 24px;
`;

const SliderTrack = styled.div`
  width: 100%;
  height: 8px;
  background-color: #e5e7eb;
  border-radius: 4px;
`;

const SliderThumb = styled.div`
  position: absolute;
  width: 16px;
  height: 16px;
  background-color: black;
  border-radius: 50%;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
`;

const SliderValue = styled.div`
  text-align: center;
  margin-top: 8px;
  font-size: 14px;
`;

export const SideDeck = () => {
  return (
    <SidebarContainer>
      {/* Region Section */}
      <Section>
        <Title>지역</Title>
        <InputGroup>
          <Label>대분류</Label>
          <SearchInputWrapper>
            <SearchInput placeholder="전체" />
            <SearchIcon>🔍</SearchIcon>
          </SearchInputWrapper>
        </InputGroup>
        <InputGroup>
          <Label>소분류</Label>
          <SearchInputWrapper>
            <SearchInput placeholder="전체" />
            <SearchIcon>🔍</SearchIcon>
          </SearchInputWrapper>
        </InputGroup>
      </Section>

      {/* Genre Section */}
      <Section>
        <Title>장르</Title>
        <CheckboxGroup>
          {[
            "전체",
            "감성/드라마/로맨스",
            "액션/어드벤처",
            "SF/판타지",
            "코믹/문제/기타",
            "추리/미스터리"
          ].map((genre) => (
            <CheckboxLabel key={genre}>
              <input type="checkbox" />
              <span>{genre}</span>
            </CheckboxLabel>
          ))}
        </CheckboxGroup>
      </Section>

      {/* Difficulty Level Section */}
      <Section>
        <Title>난이도</Title>
        <ButtonGroup>
          {[1, 2, 3, 4, 5].map((level) => (
            <RatingButton key={level}>
              <Star>★</Star>
              <span>{level}</span>
            </RatingButton>
          ))}
        </ButtonGroup>
      </Section>

      {/* Number of Players Section */}
      <Section>
        <Title>인원수</Title>
        <SliderContainer>
          <SliderTrack />
          <SliderThumb />
          <SliderValue>3명</SliderValue>
        </SliderContainer>
      </Section>

      {/* Horror Level Section */}
      <Section>
        <Title>공포도</Title>
        <ButtonGroup>
          {["없음", "1점", "2점", "3점", "4점", "5점"].map((level) => (
            <RatingButton key={level}>
              {level}
            </RatingButton>
          ))}
        </ButtonGroup>
      </Section>

      {/* Activity Level Section */}
      <Section>
        <Title>활동성</Title>
        <ButtonGroup>
          {["없음", "1점", "2점", "3점", "4점", "5점"].map((level) => (
            <RatingButton key={level}>
              {level}
            </RatingButton>
          ))}
        </ButtonGroup>
      </Section>
    </SidebarContainer>
  );
};
