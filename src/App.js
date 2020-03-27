import React from 'react';
import './App.css';
import BoxMoving from './components/BoxMoving';
import MovingBox from './components/MovingBox-one';


function App() {
  return (
    <div className="App">
      <div className="animation-1">
        <h1>MOREWAYS</h1>
      </div>
      <div className="animation-2">
        <h1>IT CENTER </h1>
      </div>
      <div className="animation-3">
        <h1>AKADMY </h1>
      </div> 
<BoxMoving />
<MovingBox />
    </div>
  );
}

export default App;
