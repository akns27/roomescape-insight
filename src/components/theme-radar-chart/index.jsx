import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer, PolarRadiusAxis } from 'recharts';
import * as s from "./index.js"

const ThemeRadarChart = ({ themeId, themeData }) => {
  const selectedTheme = themeData.find(theme => theme.id === themeId);
  
  if (!selectedTheme) return null;

  const data = [
    { subject: '난이도', value: selectedTheme.difficultyLevel },
    { subject: '공포도', value: selectedTheme.fearLevel },
    { subject: '활동성', value: selectedTheme.activityLevel }
  ];

  return (
    <s.ChartWrapper>
      <s.ChartTitle>
        한눈으로 보는 <br/>
        테마 총합
      </s.ChartTitle>
      <ResponsiveContainer width="100%" height="60%">
        <RadarChart data={data} margin={{ top: 0, right: 30, bottom: 0, left: 30 }}>
          <PolarGrid 
            stroke="#ffffff" 
            strokeWidth={2}
          />
          
          <PolarRadiusAxis 
            angle={30} 
            domain={[0, 5]} 
            tick={{ fill: '#ffffff' }}
          />
          
          <PolarAngleAxis 
            dataKey="subject" 
            tick={{ 
              fill: '#ffffff',
              fontSize: 16,
              fontWeight: '600'
            }}
            axisLine={{ stroke: '#ffffff', strokeWidth: 2 }}
          />
          
          <Radar
            name="테마 수치"
            dataKey="value"
            stroke="#00FF7F"
            fill="#98FB98"
            fillOpacity={0.7}
            strokeWidth={2}
          />
        </RadarChart>
      </ResponsiveContainer>
      
      <s.StatsContainer>
        <s.StatItem>
          <div>난이도</div>
          <div>{selectedTheme.difficultyLevel.toFixed(1)}/5.0</div>
        </s.StatItem>
        <s.StatItem>
          <div>공포도</div>
          <div>{selectedTheme.fearLevel.toFixed(1)}/5.0</div>
        </s.StatItem>
        <s.StatItem>
          <div>활동성</div>
          <div>{selectedTheme.activityLevel.toFixed(1)}/5.0</div>
        </s.StatItem>
      </s.StatsContainer>
    </s.ChartWrapper>
  );
};

export default ThemeRadarChart;