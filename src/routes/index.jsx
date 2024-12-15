// src/routes/index.jsx
import { Routes, Route, Navigate, useParams } from "react-router-dom";
import Detail from "../components/detail/index.jsx";
import MainPage from "../pages/MainPage";
import { themeData } from "../data/theme-data.jsx";

// Detail 페이지 라우트
const DetailRoute = () => {
  const { id } = useParams(); // URL에서 id 파라미터 추출
  const themeItem = themeData.find(theme => theme.id === Number(id));

  if (!themeItem) {
    return <Navigate to="/" />;
  }

  return <Detail data={themeItem} />;
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      {/* <Route path="/theme/:id" element={<Detail data={themeData[0]} />} /> */}
      <Route path="/theme/:id" element={<DetailRoute />} />
    </Routes>
  );
};

export default AppRoutes;
