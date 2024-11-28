import "../styles/Rules.css";

export default function Message({ message, handleHideMessage }) {
  return (
    <div className="Rules">
      <p>{message}</p>
      <button type="button" onClick={handleHideMessage}>
        Play again!
      </button>
    </div>
  );
}
