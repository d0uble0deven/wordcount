import React, { useState } from "react";
import "./App.css";
import { useInput } from "./hooks/InputHook";
import StatsDisplay from "./components/StatsDisplay";
import TextInputForm from "./components/TextInputForm";

function App() {
  const { value, bind, reset } = useInput("");
  const [wordCount, setWordCount] = useState(0);
  const [minutesToRead, setMinutesToRead] = useState(0);
  const [minutesToSpeak, setMinutesToSpeak] = useState(0);

  const calculate = (event) => {
    event.preventDefault();
    if (value.length === 0) {
      resetStats();
      return;
    }
    const words = value.split(" ").filter((word) => word.length > 0);
    setWordCount(words.length);
    setMinutesToRead(Math.ceil(words.length / 250));
    setMinutesToSpeak(Math.ceil(words.length / 130));
  };

  const resetStats = () => {
    setWordCount(0);
    setMinutesToRead(0);
    setMinutesToSpeak(0);
  };

  const handleClear = () => {
    reset();
    resetStats();
  };

  return (
    <div>
      <div className="foreground">
        <div className="background">
          <br />
          <div className="plaque">
            <h1>
              Welcome to
              <br />
              <a id="title">WordCount</a>
            </h1>
            <span>
              <StatsDisplay label="Number of words" value={wordCount} />
              <StatsDisplay
                label="Time to read"
                value={minutesToRead}
                unit="minute(s)"
              />
              <StatsDisplay
                label="Time to speak"
                value={minutesToSpeak}
                unit="minute(s)"
              />
            </span>
            <hr />
            <TextInputForm
              value={value}
              onChange={bind.onChange}
              onSubmit={calculate}
              onClear={handleClear}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
