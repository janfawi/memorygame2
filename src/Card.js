import React from "react";
function Card(props) {
  let card = props.card;
  let flipped = props.flipped;

  return (
    <div className="item" onClick={() => props.myclick(card)}>
      {flipped ? (
        <img className="player" width="100" src={card.image} />
      ) : (
        <img className="cover" width="100" src="/0.png" />
      )}
    </div>
  );
}

export default Card;
