// import React from "react";

import search from "../../assets/search.svg";
import { useState, useRef, useEffect } from "react";
import * as s from "./index";

const SideDeck = () => {
  const [people, setPeople] = useState(3);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef(null);

  // 최소/최대 인원
  const MIN_PEOPLE = 1;
  const MAX_PEOPLE = 10;

  // 퍼센티지 계산
  const calculatePercentage = (value) => {
    return ((value - MIN_PEOPLE) / (MAX_PEOPLE - MIN_PEOPLE)) * 100;
  };

  // 값을 퍼센티지에서 인원수로 변환
  const percentageToValue = (percentage) => {
    return Math.round(
      (percentage / 100) * (MAX_PEOPLE - MIN_PEOPLE) + MIN_PEOPLE
    );
  };

  // 마우스 위치를 퍼센티지로 변환
  const getPercentageFromMousePosition = (clientX) => {
    const { left, width } = sliderRef.current.getBoundingClientRect();
    let percentage = ((clientX - left) / width) * 100;
    percentage = Math.min(Math.max(percentage, 0), 100);
    return percentage;
  };

  // 마우스 이벤트 핸들러
  const handleMouseDown = (e) => {
    setIsDragging(true);
    updateValue(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      updateValue(e.clientX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleClick = (e) => {
    updateValue(e.clientX);
  };

  // 값 업데이트
  const updateValue = (clientX) => {
    const percentage = getPercentageFromMousePosition(clientX);
    const newValue = percentageToValue(percentage);
    setPeople(newValue);
  };

  // 이벤트 리스너 등록/제거
  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <s.SidebarContainer>
      <s.Section>
        <s.Title>지역</s.Title>
        <s.InputGroup>
          <s.Label>대분류</s.Label>
          <s.SearchInputWrapper>
            <s.SearchInput placeholder="전체" />
            <s.SearchIcon>
              <img className="search-icon" alt="Search" src={search} />
            </s.SearchIcon>
          </s.SearchInputWrapper>
        </s.InputGroup>
        <s.InputGroup>
          <s.Label>소분류</s.Label>
          <s.SearchInputWrapper>
            <s.SearchInput placeholder="전체" />
            <s.SearchIcon>
              <img className="search-icon" alt="Search" src={search} />
            </s.SearchIcon>
          </s.SearchInputWrapper>
        </s.InputGroup>
      </s.Section>

      <s.Section>
        <s.Title>장르</s.Title>
        <s.CheckboxGroup>
          {[
            "전체",
            "감성/드라마/로맨스",
            "액션/어드벤처",
            "SF/판타지",
            "코믹/문제/기타",
            "추리/미스터리",
          ].map((genre) => (
            <s.CheckboxLabel key={genre}>
              <input type="checkbox" />
              <span>{genre}</span>
            </s.CheckboxLabel>
          ))}
        </s.CheckboxGroup>
      </s.Section>

      <s.Section>
        <s.Title>난이도</s.Title>
        <s.ButtonGroup>
          {[1, 2, 3, 4, 5].map((level) => (
            <s.RatingButton key={level}>
              <s.Star>★</s.Star>
              <span>{level}</span>
            </s.RatingButton>
          ))}
        </s.ButtonGroup>
      </s.Section>

      <s.Section>
      <s.Title>인원수</s.Title>
      <s.SliderContainer>
        <s.SliderTrack ref={sliderRef} onClick={handleClick}>
          <s.SliderProgress percentage={calculatePercentage(people)} />
        </s.SliderTrack>
        <s.SliderThumb 
          percentage={calculatePercentage(people)}
          onMouseDown={handleMouseDown}
        />
        <s.SliderValue>{people}명</s.SliderValue>
      </s.SliderContainer>
    </s.Section>

      <s.Section>
        <s.Title>공포도</s.Title>
        <s.ButtonGroup>
          {["없음", "1점", "2점", "3점", "4점", "5점"].map((level) => (
            <s.RatingButton key={level}>{level}</s.RatingButton>
          ))}
        </s.ButtonGroup>
      </s.Section>

      <s.Section>
        <s.Title>활동성</s.Title>
        <s.ButtonGroup>
          {["없음", "1점", "2점", "3점", "4점", "5점"].map((level) => (
            <s.RatingButton key={level}>{level}</s.RatingButton>
          ))}
        </s.ButtonGroup>
      </s.Section>
    </s.SidebarContainer>
  );
};

export default SideDeck;