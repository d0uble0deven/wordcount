import React, { useState } from 'react';
import './App.css';
import { useInput } from './Hooks/InputHook';

function App() {
  const { value, bind, reset } = useInput('');

  let [wordsInP, setWordsInP] = useState('showing');
  let [timeToRead, setTimeToRead] = useState('showing');
  let [minutesToRead, setMinutesToRead] = useState('showing');
  let words = [];
  let time = 0;
  let minutes = 0;

  const readTime = (event, str = value) => {
    event.preventDefault();
    console.log('readTime is firing');
    // count number of words
    // iterate through string and store words as separate strings in array
    for (let word of str.split(' ')) {
      words.push(word);
    }
    console.log('words found in str: ' + words);
    console.log('number of words: ' + words.length);
    // divide by average reading time
    time = words.length / 250;
    console.log('time: ' + time + ' minutes');
    // returns number as minutes
    minutes = Math.ceil(time);
    // return minutes
    console.log('minutes: ' + minutes);
    return minutes;
  };


  // get numbers to populate from variables
  // set up a react hook,
  // research getters and setters,
  // set initial amounts to ' '
  // once button is clicked, update state to data computed  

  return (
    <div className="App">
      <h1> Welcome to WordCount </h1>
      <span>Number of words: {wordsInP} Time to read: {timeToRead} Minutes: {minutesToRead}</span>
      <form onSubmit={readTime}>
        <textarea className="text_field" type="text" {...bind} />
        <br />
        <input className="submit" type="submit" value="submit" />
      </form>

    </div>
  );
}

export default App;
