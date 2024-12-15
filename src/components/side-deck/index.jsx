// import React from "react";

import search from "../../assets/search.svg";
import { useState, useRef, useEffect } from "react";
import * as s from "./index";
import { themeData } from "../../data/theme-data";

const SideDeck = ({ onFilterChange }) => {
  const [people, setPeople] = useState(3);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState(null); //난이도
  const [selectedFearLevel, setSelectedFearLevel] = useState(null); //공포도
  const [selectedActivityLevel, setSelectedActivityLevel] = useState(null); // 활동성 추가
  const [selectedGenres, setSelectedGenres] = useState(new Set()); // 장르 선택 상태 추가

  // 장르 상수
  const GENRES = [
    "전체",
    "감성/드라마/로맨스",
    "액션/어드벤처",
    "SF/판타지",
    "코믹/문제/기타",
    "추리/미스터리",
  ];

  // 난이도 버튼 클릭 핸들러
  const handleDifficultyClick = (level) => {
    setSelectedDifficulty(selectedDifficulty === level ? null : level);
  };

  // 공포도 버튼 클릭 핸들러
  const handleFearLevelClick = (level) => {
    setSelectedFearLevel(selectedFearLevel === level ? null : level);
  };

  // 활동성 버튼 클릭 핸들러 추가
  const handleActivityLevelClick = (level) => {
    setSelectedActivityLevel(selectedActivityLevel === level ? null : level);
  };

  // 장르 체크박스 핸들러
  const handleGenreChange = (genre) => {
    setSelectedGenres((prev) => {
      const newSelected = new Set(prev);
      if (genre === "전체") {
        // 전체 선택 시 모든 장르 선택/해제
        if (newSelected.has("전체")) {
          newSelected.clear();
        } else {
          GENRES.forEach((g) => newSelected.add(g));
        }
      } else {
        // 개별 장르 토글
        if (newSelected.has(genre)) {
          newSelected.delete(genre);
          newSelected.delete("전체"); // 개별 해제 시 전체 선택도 해제
        } else {
          newSelected.add(genre);
          // 전체 제외 모든 장르가 선택되면 전체도 선택
          if (
            newSelected.size === GENRES.length - 1 &&
            GENRES.slice(1).every((g) => newSelected.has(g))
          ) {
            newSelected.add("전체");
          }
        }
      }
      return newSelected;
    });
  };

  // 필터링 로직
  useEffect(() => {
    let filtered = themeData;
    //난이도 필터링
    if (selectedDifficulty !== null) {
      filtered = themeData.filter((theme) => {
        const difficultyDiff = Math.abs(
          theme.difficultyLevel - selectedDifficulty
        );
        return difficultyDiff <= 0.5;
      });
    }

    // 인원수 필터링
    filtered = filtered.filter((theme) => {
      // "2-6인" 형식의 문자열에서 최소, 최대 인원 추출
      const [min, max] = theme.info.players
        .replace("인", "")
        .split("-")
        .map((num) => parseInt(num));

      // 선택된 인원수가 테마의 인원수 범위 내에 있는지 확인
      return people >= min && people <= max;
    });

    // 공포도 필터링
    if (selectedFearLevel !== null) {
      filtered = filtered.filter((theme) => {
        // fearLevel은 소수점이므로, 반올림하여 비교
        const themeFearLevel = Math.round(theme.fearLevel);

        return themeFearLevel === selectedFearLevel;
      });
    }

    // 활동성 필터링 추가
    if (selectedActivityLevel !== null) {
      filtered = filtered.filter((theme) => {
        const themeActivityLevel = Math.round(theme.activityLevel);
        if (selectedActivityLevel === 0) {
          return themeActivityLevel < 1;
        }
        return themeActivityLevel === selectedActivityLevel;
      });
    }

    // 장르 필터링 추가
    if (selectedGenres.size > 0 && !selectedGenres.has("전체")) {
      filtered = filtered.filter((theme) => {
        // 테마의 장르와 선택된 장르들을 비교
        return Array.from(selectedGenres).some((selectedGenre) => {
          // 장르 매칭을 위한 간단한 매핑
          const genreMapping = {
            "감성/드라마/로맨스": ["감성", "드라마", "로맨스"],
            "액션/어드벤처": ["액션", "어드벤처", "모험"],
            "SF/판타지": ["SF", "판타지"],
            "코믹/문제/기타": ["코믹", "문제", "기타"],
            "추리/미스터리": ["추리", "미스터리"],
          };

          // 선택된 장르에 해당하는 키워드들과 테마 장르를 비교
          return genreMapping[selectedGenre]?.some((keyword) =>
            theme.info.genre.toLowerCase().includes(keyword.toLowerCase())
          );
        });
      });
    }

    onFilterChange(filtered);
  }, [
    selectedDifficulty,
    people,
    selectedFearLevel,
    selectedActivityLevel,
    selectedGenres,
    onFilterChange,
  ]);

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

      {/* <s.Section>
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
      </s.Section> */}

      <s.Section>
        <s.Title>장르</s.Title>
        <s.CheckboxGroup>
          {GENRES.map((genre) => (
            <s.CheckboxLabel key={genre}>
              <input
                type="checkbox"
                checked={selectedGenres.has(genre)}
                onChange={() => handleGenreChange(genre)}
              />
              <span>{genre}</span>
            </s.CheckboxLabel>
          ))}
        </s.CheckboxGroup>
      </s.Section>

      <s.Section>
        <s.Title>난이도</s.Title>
        <s.ButtonGroup>
          {[1, 2, 3, 4, 5].map((level) => (
            <s.RatingButton
              key={level}
              onClick={() => handleDifficultyClick(level)}
            >
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
          {["0", "1", "2", "3", "4", "5"].map((level) => (
            <s.RatingButton
              key={level}
              onClick={() => handleFearLevelClick(level)}
            >
              {/* {level} */}
              {level === 0 ? "없음" : `${level}점`}
            </s.RatingButton>
          ))}
        </s.ButtonGroup>
      </s.Section>

      <s.Section>
        <s.Title>활동성</s.Title>
        <s.ButtonGroup>
          {["0", "1", "2", "3", "4", "5"].map((level) => (
            <s.RatingButton
              key={level}
              onClick={() => handleActivityLevelClick(level)}
            >
              {level === 0 ? "없음" : `${level}점`}
            </s.RatingButton>
          ))}
        </s.ButtonGroup>
      </s.Section>
    </s.SidebarContainer>
  );
};

export default SideDeck;
