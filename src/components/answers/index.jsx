import React from 'react';
import './style.css';

function Answers() {

  const arr = [
    'resposta1',
    'resposta2',
    'resposta3',
    'resposta4'
  ]

 function mapa(){
   return arr.map(result => (
     <div className="answers">
       <h3>{result}</h3>
     </div>
   ))
 }

  return (
    <div>
      {mapa()}
    </div>
  )
}

export default Answers;
