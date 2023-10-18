import * as React from "react";
import ArrowDownIcon from "@heroicons/react/24/solid/ChevronDownIcon";
import { Stack, Button, Card, CardContent, CardHeader, SvgIcon, Typography } from "@mui/material";

import { ChartContainer, BarPlot } from "@mui/x-charts";

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490, 2000, 2780, 3800, 2400, 4500];
const xLabels = [
  "Page A",
  "Page B",
  "Page C",
  "Page D",
  "Page E",
  "Page F",
  "Page G",
  "Page H",
  "Page I",
  "Page J",
  "Page K",
  "Page L",
];

export default function OverviewChart() {
  return (
    <Card sx={{ height: "100%" , borderRadius: 3 }}>
      <CardHeader
        action={
          <Button
            color="inherit"
            size="small"
            endIcon={
              <SvgIcon fontSize="small">
                <ArrowDownIcon />
              </SvgIcon>
            }
          >
            Quarterly
          </Button>
        }
        style={{ fontWeight: "bold" }}
        title="Overview"
        subheader="Monthly Earning"
      />
      <CardContent>
        <ChartContainer
          width={1000}
          height={400}
          series={[{ data: uData, label: "uv", type: "bar" }]}
          xAxis={[{ scaleType: "band", data: xLabels }]}
        >
          <BarPlot />
        </ChartContainer>
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="normal"
          spacing={6}
          marginLeft={9}
        >
        <Typography>Jan</Typography>
        <Typography>Feb</Typography>
        <Typography>Mar</Typography>
        <Typography>Apr</Typography>
        <Typography>May</Typography>
        <Typography>Jun</Typography>
        <Typography>Jul</Typography>
        <Typography>Aug</Typography>
        <Typography>Sep</Typography>
        <Typography>Oct</Typography>
        <Typography>Nov</Typography>
        <Typography>Dec</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}
