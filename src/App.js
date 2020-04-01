import React, { useState } from 'react';
import './App.css';
import { useInput } from './Hooks/InputHook';

function App() {
  const { value, bind, reset } = useInput('');
  let [wordsInP, setWordsInP] = useState('');
  let [minutesToRead, setMinutesToRead] = useState(0);
  // let words = [];
  // let time = 0;
  // let minutes = 0;

  const readTime = (event, str = value) => {
    event.preventDefault();
    // setCount(count++)
    console.log('readTime is firing');
    // count number of words
    let words = [];
    // iterate through string and store words as separate strings in array
    for (let word of str.split(' ')) {
      words.push(word);
    }
    console.log('words found in str: ' + words);
    console.log('number of words: ' + words.length);
    setWordsInP(words.length);
    // divide by average reading time
    const time = words.length / 250;
    console.log('time: ' + time + ' minutes');
    // returns number as minutes
    let minutes = Math.ceil(time);
    // return minutes
    console.log('minutes: ' + minutes);
    setMinutesToRead(minutes);
  };


  // get numbers to populate from variables
  // set up a react hook,
  // research getters and setters,
  // set initial amounts to ' '
  // once button is clicked, update state to data computed  

  // set is a function that updates the first in the array
  // on submit setWhatever({words: words})
  // <button onClick={() => setBatteryData({level: batteryData.level + .01, charging: false})}>


  return (
    <div>
      <div className="background">
        <div className="App">
          <h1> Welcome to WordCount </h1>
          <span>
            {/* <a>Count: {count}</a> */}
            <a>Number of words: {wordsInP}</a>
            {/* <a>Time to read: {timeToRead}</a>  */}
            <a>Time to read: {minutesToRead} minute(s)</a>
          </span>
          <hr />
          <form onSubmit={readTime}>
            <textarea className="text_field" type="text" {...bind} />
            <br />
            <input className="submit" type="submit" value="SUBMIT" />
          </form>

        </div>
      </div>
    </div >
  );
}

export default App;
