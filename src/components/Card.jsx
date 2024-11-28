import { useState, useEffect } from "react";
import "../styles/Card.css";

export default function Card({ pokeURL, index, handleCardClick }) {
  const [pokemonData, setPokemonData] = useState({});
  useEffect(() => {
    fetchData();
  }, [pokeURL]);

  async function fetchData() {
    const response = await fetch(pokeURL);
    const jsonResponse = await response.json();
    setPokemonData(jsonResponse);
  }

  return (
    <div className="Card" onClick={() => handleCardClick(index)}>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonData.id}.svg`}
        alt={pokemonData.name}
      />
      <p>{pokemonData.name}</p>
    </div>
  );
}
