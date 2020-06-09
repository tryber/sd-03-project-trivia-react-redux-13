import React from 'react';
import './style.css';
import Test from './imgtest.jpg'

function Navbar() {
  return (
    <nav>
      <div className="left">      
        <h3><img src={Test} className="img"/>Jogador</h3>
      </div>
      <div className="right">
        <h3>{10 + 10} Pontos</h3>
      </div>
    </nav>
  )
}

export default Navbar;
