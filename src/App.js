import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {




  const readTime = (str) => {
    // count number of words
    // iterate through string and store words as separate strings in array
    const words = []
    for (let word of str.split(' ')) {
      words.push(word)
    }
    console.log('words found in str: ' + words)
    console.log('number of words: ' + words.length)

    // divide by average reading time
    const time = words.length / 250
    console.log('time: ' + time + ' minutes')
    // returns number as minutes
    const minutes = Math.ceil(time)

    // return minutes
    return console.log('minutes: ' + minutes)

  }


  return (
    <div className="App">
      <h1> Welcome to WordCount </h1>
      <textarea className="text_field" type="text" />
    </div>
  );
}

export default App;
