import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import logo from './trivia.png';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>SUA VEZ</p>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
