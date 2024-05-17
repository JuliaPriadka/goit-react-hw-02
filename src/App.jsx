import { useState } from "react";
import "./App.css";
import Description from "./components/description/description";
import Options from "./components/options/options";
import Feedback from "./components/feedback/feedback";
import Notification from "./components/notification/notification";
import PositiveFeedback from "./components/positiveFeedback/positiveFeedback";

function App() {
  const [count, setCount] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  function updateFeedback(feedbackType) {
    setCount({
      ...count,
      [feedbackType]: count[feedbackType] + 1,
    });
  }

  const totalFeedback = count.good + count.neutral + count.bad;
  const positiveFeedback = Math.round((count.good / totalFeedback) * 100);

  function resetFeedback() {
    setCount({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  }

  return (
    <>
      <Description />
      <Options
        onClickFunction={updateFeedback}
        totalFeedback={totalFeedback}
        resetFunction={resetFeedback}
      />
      {totalFeedback > 0 ? <Feedback feedbacks={count} /> : <Notification />}
      {totalFeedback > 0 && (
        <PositiveFeedback positiveFeedbackPercent={positiveFeedback} />
      )}
    </>
  );
}

export default App;
