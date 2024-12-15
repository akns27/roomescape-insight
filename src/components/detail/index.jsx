import * as s from "./style";
import group from "../../assets/group.svg";
import search from "../../assets/search.svg";
import timer from "../../assets/timer.svg";
import trophy from "../../assets/trophy.svg";
import rating from "../../assets/kid_star.svg"
import arrowBack from "../../assets/arrow_back.svg"
import Header from "../header/index.jsx";
import { useNavigate } from "react-router-dom";
import { themeData } from "../../data/theme-data.jsx";
import ThemeRadarChart from "../theme-radar-chart/index.jsx";

export const Detail = ({ data }) => {
  const navigate = useNavigate();

  // data에서 필요한 정보 추출
  const { imageUrl, themeName, cafeName, info, resvUrl, id } = data;

  const handleReservation = () => {
    // 새 탭에서 예약 URL 열기
    window.open(resvUrl, '_blank');
  };

  const handleBack = () => {
    navigate('/'); // 홈으로 이동
  };

  

  return (
    <s.ScreenContainer>
        <Header/>
        <s.BackButton onClick={handleBack}>
          <img src={arrowBack} alt="뒤로 가기" />
          <span className="span">뒤로가기</span>
        </s.BackButton>

        <s.MainContent>
          <s.ImageSection style={{ backgroundImage: `url(${imageUrl})` }} />
          <s.ReservationButton onClick={handleReservation}>
            예약하기
          </s.ReservationButton>
        </s.MainContent>

        <s.InfoSection>
          <s.FlexColumn style={{gap:"236px"}}>
          <s.FlexColumn style={{gap:"8px"}}>
            <s.Title>{themeName}</s.Title>
            <s.SubTitle>{cafeName}</s.SubTitle>
          </s.FlexColumn>

          <s.IconGrid>
            <s.IconItem>
              <img src={rating} alt="별점" />
              <span>{info.rating}</span>
            </s.IconItem>
            <s.IconItem>
              <img src={search} alt="모험" />
              <span>{info.genre}</span>
            </s.IconItem>
            <s.IconItem>
              <img src={timer} alt="시간" />
              <span>{info.time}</span>
            </s.IconItem>
            <s.IconItem>
              <img src={group} alt="인원" />
              <span>{info.players}</span>
            </s.IconItem>
            <s.IconItem>
              <img src={trophy} alt="트로피" />
              <span>{info.award}</span>
            </s.IconItem>
          </s.IconGrid>
          </s.FlexColumn>
        </s.InfoSection>


        {/* <s.SideContent> */}
        <ThemeRadarChart themeId={id} themeData={themeData} />
        {/* </s.SideContent> */}
    </s.ScreenContainer>
  );
};

export default Detail;