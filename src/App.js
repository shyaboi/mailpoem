import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cell1 from './components/cell1'
import Cell2 from './components/cell2'
import Words from './components/words'
import Nav from './components/topNav'


function App() {
  return (
    <div className="App">
      <Nav />
<Cell1 />
<Cell2 />

<Words />
    </div>
  );
}

export default App;
