import React from 'react';

function Button(props) {
  return (
    <div>
      {
        props.button === 'btn1'
        ? <button className="uk-button uk-button-primary">{props.text}</button>
        : <button className="uk-button uk-button-secondary">Jogar novamente</button>
      }
    </div>
  )
}

export default Button;
