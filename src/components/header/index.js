
import styled from "styled-components";

export const StyledHeader = styled.div`
  background-color: #1c1c1e;
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 25px 12px 64px;


`;

export const SearchInputWrapper = styled.div`
  position: relative;
`;

export const SearchInput = styled.input`
  background-color: #ffffff;
  border-radius: 12px;
  height: 40px;
  width: 275px;
  display: flex;
  align-items: center;
  padding: 8px;

  &::placeholder {
    color: #9ca3af;
  }
`;

export const SearchIcon = styled.span`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  height: 24px;
  width: 24px;
`;
