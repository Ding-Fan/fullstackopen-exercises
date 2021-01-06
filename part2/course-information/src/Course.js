import React from "react";
import Header from "./Header.js";
import Content from "./Content.js";
import Total from "./Total.js";

export default function Course({ course }) {
  const total = course.parts.reduce((previous, next) => {
    return previous + next.exercises;
  }, 0);

  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total total={total} />
    </div>
  );
}
