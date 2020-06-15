import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cell1 from './components/cell1'
import Cell2 from './components/cell2'
import Words from './components/words'


function App() {
  return (
    <div className="App">
<Cell1 />
<Cell2 />

<Words />
    </div>
  );
}

export default App;
