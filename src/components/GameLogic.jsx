import { useState, useEffect } from "react";
import Card from "./Card";
import Navbar from "./Navbar";
import "../styles/GameLogic.css";
import Rules from "./Rules";
import Message from "./Message";

export default function GameLogic() {
  const pokemonsURL = "https://pokeapi.co/api/v2/pokemon?limit=15&offset=23";
  const [pokemons, setPokemons] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);
  const [endGame, setEndGame] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(pokemonsURL);
      const jsonResponse = await response.json();
      setPokemons(shuffle(jsonResponse.results));
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (score >= 15) {
      setEndGame(!endGame);
    }
  }, [score]);

  function shuffle(array) {
    const shuffledArr = [...array];
    for (let i = shuffledArr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]];
    }
    return shuffledArr;
  }

  function handleCardClick(index) {
    if (clickedCards.includes(pokemons[index])) {
      setEndGame(!endGame);
    } else {
      setClickedCards([...clickedCards, pokemons[index]]);
      setPokemons(shuffle(pokemons));
      const currentScore = score + 1;
      setScore(currentScore);
      setBestScore(currentScore > bestScore ? currentScore : bestScore);
    }
  }

  function resetGame() {
    setScore(0);
    setClickedCards([]);
    setPokemons(shuffle(pokemons));
    setEndGame(!endGame);
  }

  return (
    <>
      <Rules />
      {endGame && (
        <Message
          handleHideMessage={resetGame}
          message={score >= 15 ? "Congrats! You Won " : "You lose!"}
        />
      )}
      <Navbar score={score} bestScore={bestScore} />
      <div className="Cards-container flex">
        {pokemons.map((pokemon, index) => (
          <Card
            key={pokemon.name}
            pokeURL={pokemon.url}
            handleCardClick={handleCardClick}
            index={index}
          />
        ))}
      </div>
    </>
  );
}
