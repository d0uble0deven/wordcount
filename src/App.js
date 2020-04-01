import React, { useState } from 'react';
import './App.css';
import { useInput } from './Hooks/InputHook';

function App() {
  const { value, bind, reset } = useInput('');
  let [wordCount, setWordCount] = useState('');
  let [minutesToRead, setMinutesToRead] = useState(0);
  let [minutesToSpeak, setMinutesToSpeak] = useState(0);


  const calculate = (event, str = value) => {
    event.preventDefault();
    // count number of words
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
      <div className="background">
        <div className="App">
          <h1> Welcome to WordCount </h1>
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
  );
}

export default App;
