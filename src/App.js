import React, { useState } from 'react';
import './App.css';
import { useInput } from './Hooks/InputHook';

function App() {
  const { value, bind, reset } = useInput('');
  let [wordCount, setWordCount] = useState(0);
  let [minutesToRead, setMinutesToRead] = useState(0);
  let [minutesToSpeak, setMinutesToSpeak] = useState(0);


  const calculate = (event, str = value) => {
    event.preventDefault();
    // count number of words
    if (str.length === 0) {
      setWordCount(0);
      setMinutesToRead(0);
      setMinutesToSpeak(0);
      return
    }
    let words = [];
    // iterate through string and store words as separate strings in array
    for (let word of str.split(' ')) {
      words.push(word);
    }
    setWordCount(words.length);
    // divide by average reading time
    const readTime = words.length / 250;
    // returns number as minutes
    let readMinutes = Math.ceil(readTime);
    // return minutes
    setMinutesToRead(readMinutes);

    const speakTime = words.length / 130;
    let speakminutes = Math.ceil(speakTime);
    setMinutesToSpeak(speakminutes);
  };


  return (
    <div>
      <div className="foreground">
        <div className="background">
          <br />
          <div className="plaque">

            <h1> Welcome to
            <br />
              <a id="title">WordCount</a> </h1>
            <span>
              <a>Number of words: {wordCount}</a>
              <a>Time to read: {minutesToRead} minute(s)</a>
              <a>Time to speak: {minutesToSpeak} minute(s)</a>
            </span>
            <hr />
            <form onSubmit={calculate}>
              <textarea className="text_field" type="text" {...bind} />
              <br />
              <input className="submit" type="submit" value="SUBMIT" />
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
