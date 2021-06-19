import React from "react";
import cards from "./data";
import Card from "./Card";
function App() {
  const [a, seta] = React.useState([]);
  const deciceToFlip = (card) => {
    if (a.some((item) => item.id === card.id)) {
      return true;
    } else {
      return false;
    }
  };
  const fadeOutUnMatchedCards = () => {
    if (a.length > 1) {
      if (a[0].cartoon !== a[1].cartoon) {
        seta([]);
      }
    }
  };
  const setMyIdFromCard = (item) => {
    // alert(id)
    // console.log(a)
    if (a.length < 3) {
      seta([...a, item]);
    }

    fadeOutUnMatchedCards();
  };

  return (
    <div className="game">
      <div className="flex">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            flipped={deciceToFlip(card)}
            myclick={(item) => setMyIdFromCard(item)}
          />
        ))}
      </div>
      <div className="controls">
        <h2>High scrore</h2>
        <h2>best scrore</h2>
        <button>restart</button>
      </div>
    </div>
  );
}
export default App;
