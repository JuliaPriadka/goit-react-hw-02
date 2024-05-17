import css from "../positiveFeedback/positiveFeedback.module.css";

export default function PositiveFeedback({ positiveFeedbackPercent }) {
  return (
    <p className={css.positiveFeedback}>
      Positive: {positiveFeedbackPercent} %
    </p>
  );
}
