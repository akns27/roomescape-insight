// import React from "react";

import search from "../../assets/search.svg";
import * as s from "./index"

const Header = () => {
  return (
    <s.StyledHeader>
      <div className="logo">
        <div>방탈출</div>
        <div>인사이트</div>
      </div>
      <div className="search-container">
        <img className="search-icon" alt="Search" src={search} />
      </div>
    </s.StyledHeader>
  );
};

export default Header