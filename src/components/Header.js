import { useEffect } from "react";
import Button from "./Button";

const Header = ({ handleNewGame, wins }) => {
  useEffect(() => {
    document.title = `${wins} wins`;
  }, [wins]);

  return (
    <header className="header">
      <h4 className="wins">{wins} WINS</h4>
      <Button onClick={handleNewGame}>NEW GAME</Button>
    </header>
  );
};

export default Header;
