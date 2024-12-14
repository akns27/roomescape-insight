import OnMapCard from "../on-map-card/index.jsx";
import { StyledMap } from "./index";
import * as s from "./index.js";
import { OnMapCafeData } from "../../data/on-map-cafe-data.jsx";

const Map = () => {
  return (
    <s.MapContainer>
      <StyledMap />
      <s.OnMapCardWrapper>
        <s.OnMapCardGrid>
          {OnMapCafeData.map((cafe) => (
            <OnMapCard key={cafe.id} data={cafe} />
          ))}
        </s.OnMapCardGrid>
      </s.OnMapCardWrapper>
    </s.MapContainer>
  );
};

export default Map;
