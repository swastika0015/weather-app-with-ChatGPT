"use client";

import { Card, AreaChart, Title } from "@tremor/react";

type Props = {
  results: Root;
};

function RainChart({ results }: Props) {

  const currentHour = new Date().getHours();

  const hourly = results?.hourly.time
    .map((time) =>
      new Date(time).toLocaleString("en-IN", {
        hour: "numeric",
        hour12: false,
      })
    )
    .slice(currentHour, currentHour + 24);

export default RainChart;