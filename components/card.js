import React from 'react';

function Card(props) {
  return (
    <li className={card}>
      <img alt={'превью'} src={props.link} className={style.card__image}/>
      <p>{props.name}</p>
    </li>
  );
}

export default Card;