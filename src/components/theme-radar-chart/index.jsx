// import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer, PolarRadiusAxis } from 'recharts';
// import * as s from "./index.js"

// const ThemeRadarChart = ({ themeId, themeData }) => {
//   const selectedTheme = themeData.find(theme => theme.id === themeId);
  
//   if (!selectedTheme) return null;

//   const data = [
//     { subject: '난이도', value: selectedTheme.difficultyLevel },
//     { subject: '공포도', value: selectedTheme.fearLevel },
//     { subject: '활동성', value: selectedTheme.activityLevel }
//   ];

//   return (
//     <s.ChartWrapper>
//       <s.ChartTitle>
//         {selectedTheme.themeName} 테마 분석
//       </s.ChartTitle>
//       <ResponsiveContainer width="100%" height="70%">
//         <RadarChart data={data} margin={{ top: 0, right: 30, bottom: 0, left: 30 }}>
//           <PolarGrid 
//             stroke="#ffffff" 
//             strokeWidth={1}
//           />
          
//           <PolarRadiusAxis 
//             angle={30} 
//             domain={[0, 5]} 
//             tick={{ fill: '#ffffff' }}
//           />
          
//           <PolarAngleAxis 
//             dataKey="subject" 
//             tick={{ 
//               fill: '#ffffff',
//               fontSize: 16,
//               fontWeight: 'bold'
//             }}
//             axisLine={{ stroke: '#ffffff', strokeWidth: 2 }}
//           />
          
//           <Radar
//             name="테마 수치"
//             dataKey="value"
//             stroke="#1a365d"
//             fill="#1a365d"
//             fillOpacity={0.7}
//             strokeWidth={2}
//           />
//         </RadarChart>
//       </ResponsiveContainer>
      
//       <s.StatsContainer>
//         <s.StatItem>
//           <div>난이도</div>
//           <div>{selectedTheme.difficultyLevel.toFixed(1)}/5.0</div>
//         </s.StatItem>
//         <s.StatItem>
//           <div>공포도</div>
//           <div>{selectedTheme.fearLevel.toFixed(1)}/5.0</div>
//         </s.StatItem>
//         <s.StatItem>
//           <div>활동성</div>
//           <div>{selectedTheme.activityLevel.toFixed(1)}/5.0</div>
//         </s.StatItem>
//       </s.StatsContainer>
//     </s.ChartWrapper>
//   );
// };

// export default ThemeRadarChart;


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
        {selectedTheme.themeName} 테마 분석
      </s.ChartTitle>
      <ResponsiveContainer width="100%" height="70%">
        <RadarChart data={data} margin={{ top: 0, right: 30, bottom: 0, left: 30 }}>
          <PolarGrid 
            stroke="#ffffff" 
            strokeWidth={1}
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
              fontWeight: 'bold'
            }}
            axisLine={{ stroke: '#ffffff', strokeWidth: 2 }}
          />
          
          <Radar
            name="테마 수치"
            dataKey="value"
            stroke="#1a365d"
            fill="#1a365d"
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