import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";
import { Card, CardContent, CardHeader } from "@mui/material";

const data = [{ value: 5 }, { value: 10 }, { value: 15 }];

const size = {
  width: 600,
  height: 400,
};

const StyledText = styled("text")(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: 20,
}));

function PieCenterLabel({ children }) {
  const { width, height } = useDrawingArea();
  const lines = children.split("+");

  return (
    <StyledText x={width / 2} y={height / 2}>
      {lines.map((line, index) => (
        <tspan key={index} dy="1px">
          {line}
        </tspan>
      ))}
    </StyledText>
  );
}

export default function OverviewCustomer() {
  return (
    <Card sx={{ height: "100%", borderRadius: 3 }}>
      <CardHeader
        style={{ fontWeight: "bold" }}
        title="Customers"
        subheader="Customers that buy products"
      />
      <CardContent>
        <PieChart series={[{ data, innerRadius: 155 }]} {...size}>
          <PieCenterLabel>56%+ Total+ New+ Customers</PieCenterLabel>
        </PieChart>
      </CardContent>
    </Card>
  );
}
