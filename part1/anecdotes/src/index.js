import React, { useState } from "react";
import ReactDOM from "react-dom";

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0));

  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function getMostVotesAnecdote() {
    return points.indexOf(Math.max(...points));
  }

  return (
    <>
      <div>
        <h1>Anecdote of the day</h1>
        <div>{props.anecdotes[selected]}</div>
        <div>has {points[selected]} votes </div>
        <div>
          <button
            onClick={() => {
              const newPoints = [...points];
              newPoints[selected] += 1;
              setPoints(newPoints);
            }}
          >
            vote
          </button>
          <button
            onClick={() => {
              const theIndex = randomIntFromInterval(0, anecdotes.length - 1);
              setSelected(theIndex);
            }}
          >
            next anecdote
          </button>
        </div>
      </div>
      <div>
        <h1>Anecdote with most votes</h1>
        <div>{props.anecdotes[getMostVotesAnecdote()]}</div>
        <div>has {points[getMostVotesAnecdote()]} votes </div>
      </div>
    </>
  );
};

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
