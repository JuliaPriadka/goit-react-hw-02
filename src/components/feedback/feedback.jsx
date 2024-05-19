import css from "../feedback/feedback.module.css";

export default function Feedback({
  feedbacks,
  positiveFeedbackPercent,
  totalFeedback,
}) {
  return (
    <div className={css.feedback}>
      <p>Good: {feedbacks.good}</p>
      <p>Neutral: {feedbacks.neutral}</p>
      <p>Bad: {feedbacks.bad}</p>
      <p className={css.feedback}>Total: {totalFeedback}</p>
      <p className={css.feedback}>Positive: {positiveFeedbackPercent} %</p>
    </div>
  );
}
