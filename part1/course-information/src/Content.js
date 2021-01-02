import React from "react";
import Part from "./Part.js";

export default function Content({ parts }) {
  return (
    <>
      {parts.map(({ name, exercise }, index) => {
        return <Part key={index} name={name} exercise={exercise} />;
      })}
    </>
  );
}
