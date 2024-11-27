import { useState, useEffect } from "react";
import "../styles/Card.css";

export default function Card({ pokeURL }) {
  const [pokemonData, setPokemonData] = useState({});
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await fetch(pokeURL);
    const jsonResponse = await response.json();
    setPokemonData(jsonResponse);
  }

  return (
    <>
      <div className="Card">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonData.id}.svg`}
          alt={pokemonData.name}
        />
        <p>{pokemonData.name}</p>
      </div>
    </>
  );
}
