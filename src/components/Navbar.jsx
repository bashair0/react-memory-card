import Logo from "./Logo";
import "../styles/Navbar.css";

export default function Navbar({ score, bestScore }) {
  return (
    <header>
      <nav className="Navbar flex">
        <Logo />
        <div className="scores-container">
          <h2>Current score: {score}</h2>
          <h2>Best score: {bestScore}</h2>
        </div>
      </nav>
    </header>
  );
}
