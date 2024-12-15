// src/pages/MainPage.jsx

import SideDeck from "../components/side-deck/index.jsx";
import InfoCard from "../components/info-card/index.jsx";
import Header from "../components/header/index.jsx";
import Map from "../components/map/index.jsx";
import { themeData } from "../data/theme-data.jsx";
import * as s from "../App.js";

const MainPage = () => {
  return (
    <>
      <Header />
      <SideDeck />
      <Map />
      <s.FlexStyle style={{ padding: "40px 0px 24px 0px" }}>
        <s.H1>검색결과</s.H1>
        <s.P1>{themeData.length}개</s.P1>
      </s.FlexStyle>
      <s.InfoCardGrid>
        {themeData.map((theme) => (
          <InfoCard key={theme.id} data={theme} />
        ))}
      </s.InfoCardGrid>
    </>
  );
};

export default MainPage;