import styled from "styled-components";
export const StyledCard = styled.div`

  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0px 5px 15px 2px rgba(0, 0, 0, 0.1);
  padding: 16px;
  display: flex;
  gap: 16px;
  min-width: 282px;
  
  


  .cafe-image {
    background-color: #d1d1d1;
    border-radius: 8px;
    width: 72px;
    height: 72px;
  }


  .content {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }


  .cafe-name {
    font-size: 16px;
    font-weight: 700;
    color: #000000;
    white-space: nowrap;
    overflow: hidden; 
    text-overflow: ellipsis;
    width: ${props => props.width || '162px'}; 
  }


  .info {
    display: flex;
    gap: 8px;
  }

  .info-item {
    display: flex;
    align-items: center;
    gap: 4px;
  }


  .icon {
    width: 16px;
    height: 16px;
  }


  .text {
    font-size: 12px;
    color: #676767;
  }
`;