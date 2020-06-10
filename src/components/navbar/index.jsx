import React from 'react';
import './style.css';
import Test from './imgtest.jpg';

function NavBar() {
  return (
    <nav>
      <div className='left'>
        <h3>
          <img src={Test} className='img' alt='avatar' />
          Jogador
        </h3>
      </div>
      <div className='right'>
        <h3>{10 + 10} Pontos</h3>
      </div>
    </nav>
  );
}

export default NavBar;
