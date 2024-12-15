import styled from 'styled-components';

export const ChartWrapper = styled.div`
  width: 100%;
  height: 600px;
  background: linear-gradient(135deg, #FF6B95 0%, #FFB9B9 100%);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
`;

export const ChartTitle = styled.h3`
  color: white;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const StatsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1.5rem;
  color: white;
  font-size: 0.9rem;
`;

export const StatItem = styled.div`
  text-align: center;
  background: rgba(255, 255, 255, 0.2);
  padding: 0.5rem 1rem;
  border-radius: 10px;
`;