import css from "../options/options.module.css";

export default function Options({
  onClickFunction,
  totalFeedback,
  resetFunction,
}) {
  return (
    <div className={css.options}>
      <button onClick={() => onClickFunction("good")}>Good</button>
      <button onClick={() => onClickFunction("neutral")}>Neutral</button>
      <button onClick={() => onClickFunction("bad")}>Bad</button>
      {totalFeedback > 0 && <button onClick={resetFunction}>Reset</button>}
    </div>
  );
}
