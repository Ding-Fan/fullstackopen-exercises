import React from "react";
import Statistic from "./Statistic.js";

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  average,
  positive,
}) {
  return (
    <table>
      <tbody>
        <Statistic text="good" value={good} />
        <Statistic text="neutral" value={neutral} />
        <Statistic text="bad" value={bad} />
        <Statistic text="total" value={total} />
        <Statistic text="average" value={average} />
        <Statistic text="positive" value={`${positive} %`} />
      </tbody>
    </table>
  );
}
