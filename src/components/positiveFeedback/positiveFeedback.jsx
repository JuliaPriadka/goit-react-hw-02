import css from "../positiveFeedback/positiveFeedback.module.css";

export default function PositiveFeedback({
  positiveFeedbackPercent,
  totalFeedback,
}) {
  return (
    <>
      <p className={css.positiveFeedback}>Total: {totalFeedback}</p>
      <p className={css.positiveFeedback}>
        Positive: {positiveFeedbackPercent} %
      </p>
    </>
  );
}
