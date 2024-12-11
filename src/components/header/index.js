
import styled from "styled-components";

export const StyledHeader = styled.div`
  background-color: #1c1c1e;
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;


  .logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #ffffff;
    font-size: 20px;
    line-height: 28px;
  }


  .search-container {
    background-color: #ffffff;
    border-radius: 12px;
    height: 40px;
    width: 275px;
    display: flex;
    align-items: center;
    padding: 8px;
  }

  .search-icon {
    height: 24px;
    width: 24px;
  }
`;
