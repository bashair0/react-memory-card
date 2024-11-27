import "../styles/Logo.css";

export default function Logo() {
  return (
    <>
      <div className="flex">
        <img
          className="Logo"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
          alt="pikachu"
        />
        <h1>Poke Cards</h1>
      </div>
    </>
  );
}
