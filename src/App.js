import { useState, useEffect } from "react";
import shuffle from "./utilities/shuffle";
import Card from "./components/Card";

function App() {
  // State to manage the array of card data
  const [cards, setCards] = useState(shuffle);

  // State to manage first selected card in a turn
  const [pickOne, setPickOne] = useState(null);

  // State to manage second selected card in a turn
  const [pickTwo, setPickTwo] = useState(null);

  // State to manage disabling UI when pair is does not match
  const [disabled, setDisabled] = useState(false);
  const [wins, setWins] = useState(0);

  // Event Handler when clicking on Card component
  const handleClick = (card) => {
    if (!disabled) {
      pickOne ? setPickTwo(card) : setPickOne(card);
    }
  };

  return (
    <main>
      <img src="/images/one-piece-pairs-logo.png" alt="" width="220px" />
      <div className="grid">
        {cards.map((card) => {
          const { image, id, matched } = card;

          return (
            <Card
              key={id}
              image={image}
              selected={card === pickOne || card === pickTwo || matched}
              onClick={() => handleClick(card)}
            />
          );
        })}
      </div>
    </main>
  );
}

export default App;
