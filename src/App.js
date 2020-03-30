import React from 'react';
import './App.css';
import { useInput } from './Hooks/InputHook';

function App() {

  const { value, bind, reset } = useInput('');


  const readTime = (event, str = value) => {
    event.preventDefault();
    console.log('readTime is firing');
    // count number of words
    // iterate through string and store words as separate strings in array
    const words = [];
    for (let word of value.split(' ')) {
      words.push(word);
    }
    console.log('words found in str: ' + words);
    console.log('number of words: ' + words.length);

    // divide by average reading time
    const time = words.length / 250
    console.log('time: ' + time + ' minutes')
    // returns number as minutes
    const minutes = Math.ceil(time);

    // return minutes
    return console.log('minutes: ' + minutes);

  };


  return (
    <div className="App">
      <h1> Welcome to WordCount </h1>
      <form onSubmit={readTime}>
        <textarea className="text_field" type="text" {...bind} />
        <br />
        <input className="submit" type="submit" value="submit" />
      </form>

    </div>
  );
}

export default App;
