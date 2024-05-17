import css from "../feedback/feedback.module.css";

export default function Feedback({ feedbacks }) {
  return (
    <div className={css.feedback}>
      <p>Good: {feedbacks.good}</p>
      <p>Neutral: {feedbacks.neutral}</p>
      <p>Bad: {feedbacks.bad}</p>
    </div>
  );
}
