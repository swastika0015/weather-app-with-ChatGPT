"use client";

import { Card, AreaChart, Title } from "@tremor/react";

type Props = {
  results: Root;
};

function TempChart({ results }: Props) {
  const currentHour = new Date().getHours();
  const hourly = results?.hourly.time
    .map((time) =>
      new Date(time).toLocaleString("en-US", {
        hour: "numeric",
        hour12: false,
        // timeZone: "America/New_York", // Set the timezone to EST
      })
    )
    .slice(currentHour, currentHour + 24);

  const data = hourly.map((hour, i) => ({
    time: Number(hour),
    "Temperature (F)": results.hourly.temperature_2m[currentHour + i],
    "Feels like": results.hourly.apparent_temperature[currentHour + i],
    "UV Index": results.hourly.uv_index[currentHour + i],
    "Tomorrow's Temperature (F)": results.hourly.temperature_2m[currentHour + i + 24],
    "Tomorrow's Feels like": results.hourly.apparent_temperature[currentHour + i + 24],
    "Tomorrow's UV Index": results.hourly.uv_index[currentHour + i + 24],
  }));

  const dataFormatter = (number: number) => `${number}`;


export default TempChart;