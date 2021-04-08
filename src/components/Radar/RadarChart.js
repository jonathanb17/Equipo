import { memo } from "react";

import {
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    Radar,
    Tooltip,
    Legend,
    PolarRadiusAxis,
    ResponsiveContainer,
} from "recharts";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    chartBar: {
        background: "white",
        position: "relative",
        "& > svg": {
            margin: "15px auto",
        },
        transform: "translateX(45px)",
        "& .recharts-default-tooltip": {
            backgroundColor: "transparent !important",
        },
    },
    chart: {
        width: "100%",
        height: 250,
    },
}));

// const GetGraphyCardPlayer = ({ data }) => {
const GetGraphyCardPlayer = ({ data, marginTop }) => {
    const classes = useStyles();

    return (
        <div className={classes.chart} style={{ marginTop: marginTop }}>
            <ResponsiveContainer>
                <RadarChart outerRadius={90} data={data} width={500} height={250}>
                    <PolarGrid gridType="circle" />
                    <PolarAngleAxis
                        axisLine={false}
                        dataKey="translate" //rate
                        tick={{ fill: "white" }}
                        domain={[0, 5]}
                    />
                    <PolarRadiusAxis
                        tick={false}
                        tickCount={6}
                        axisLine={false}
                        domain={[0, 5]}
                    />
                    <Radar
                        dataKey="avg"
                        stroke="#8884d8"
                        fill="#8884d8"
                        fillOpacity={0.6}
                    />
                    <Tooltip />
                    <Legend />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
};
export default memo(GetGraphyCardPlayer);
