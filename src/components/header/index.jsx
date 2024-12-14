// import React from "react";

import search from "../../assets/search.svg";
import logo from "../../assets/logo.svg";
import * as s from "./index";

const Header = () => {
  return (
    <s.StyledHeader >
      <img alt="logo" src={logo} />
      <s.SearchInputWrapper>
        <s.SearchInput placeholder="방탈출을 검색해보세요" />
        <s.SearchIcon>
          <img alt="Search" src={search} />
        </s.SearchIcon>
      </s.SearchInputWrapper>
    </s.StyledHeader>
  );
};

export default Header;
