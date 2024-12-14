// src/components/map/index.jsx
import OnMapCard from "../on-map-card/index.jsx";
import * as s from "./index.js";
import { OnMapCafeData } from "../../data/on-map-cafe-data.jsx";
import { themeData } from "../../data/theme-data.jsx";
import { useEffect, useState } from "react";

const { kakao } = window;

const Map = () => {
  const [nearByCafes, setNearByCafes] = useState([]);

  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.557434302, 126.926960224),
      level: 6,
    };

    const map = new kakao.maps.Map(container, options);

    // 거리 계산 함수 (하버사인 공식)
    const getDistance = (lat1, lon1, lat2, lon2) => {
      const R = 6371; // 지구의 반지름 (km)
      const deg2rad = (deg) => deg * (Math.PI / 180);
      
      const dLat = deg2rad(lat2 - lat1);
      const dLon = deg2rad(lon2 - lon1);
      
      const a = 
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
      
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const d = R * c; // Distance in km
      return d * 1000; // Convert to meters
    };

    // 3km 반경 내의 카페 찾기 함수
    const findNearByCafes = () => {
      const center = map.getCenter();
      const radius = 5000; // 5km를 미터 단위로

      const filteredCafes = themeData.filter(cafe => {
        const cafePosition = new kakao.maps.LatLng(
          cafe.lat,
          cafe.lng
        );

        const distance = getDistance(
          center.getLat(),
          center.getLng(),
          cafePosition.getLat(),
          cafePosition.getLng()
        );

        return distance <= radius;
      });

      setNearByCafes(filteredCafes);
    };

    // 지도의 중심이 변경될 때마다 주변 카페 다시 검색
    kakao.maps.event.addListener(map, 'dragend', findNearByCafes);
    kakao.maps.event.addListener(map, 'zoom_changed', findNearByCafes);

    // 초기 로딩시 한번 실행
    findNearByCafes();
  }, []);

  return (
    <s.MapContainer>
      <s.KakaoMap id="map" />
      <s.OnMapCardWrapper>
        <s.OnMapCardGrid>
          {nearByCafes.map((cafe) => (
            <OnMapCard key={cafe.id} data={cafe} />
          ))}
        </s.OnMapCardGrid>
      </s.OnMapCardWrapper>
    </s.MapContainer>
  );
};

export default Map;