import {
  Radar,
  RadarChart as RechartsRadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  { subject: "aggregator", value: 0.6 },
  { subject: "luciferase", value: 0.95 },
  { subject: "reactive", value: 0.0 },
  { subject: "promiscuous", value: 0.0 },
];

interface RadarChartProps {
  color: string;
}

const RadarChart = ({ color }: RadarChartProps) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsRadarChart data={data} cx="50%" cy="50%" outerRadius="50%" margin={{ top: 25, right: 60, bottom: 25, left: 60 }}>
        <PolarGrid stroke="rgba(255,255,255,0.35)" />
        <PolarAngleAxis
          dataKey="subject"
          tick={{ fill: "#ffffff", fontSize: 11, fontWeight: 600 }}
        />
        <PolarRadiusAxis
          angle={90}
          domain={[0, 1]}
          tickCount={6}
          tick={false}
        />
        <Radar
          dataKey="value"
          stroke="#c8e64e"
          fill="#c8e64e"
          fillOpacity={0.3}
          strokeWidth={2.5}
          dot={{ r: 5, fill: "#c8e64e", stroke: "#ffffff" }}
        />
      </RechartsRadarChart>
    </ResponsiveContainer>
  );
};

export default RadarChart;
