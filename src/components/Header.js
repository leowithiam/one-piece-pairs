import { useEffect } from "react";
import Button from "./Button";

const Header = ({ handleNewGame, wins }) => {
  useEffect(() => {
    if (wins) {
      document.title = `One Piece Pairs | ${wins} ${wins > 1 ? "Wins" : "Win"}`;
    } else {
      document.title = `One Piece Pairs`;
    }
  }, [wins]);

  return (
    <header className="header">
      <h2 className="wins">
        {wins} {wins === 1 ? "WIN" : "WINS"}
      </h2>
      <Button onClick={handleNewGame}>NEW GAME</Button>
    </header>
  );
};

export default Header;
