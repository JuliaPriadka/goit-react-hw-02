import { useEffect, useState } from "react";
import "./App.css";
import Description from "./components/description/description";
import Options from "./components/options/options";
import Feedback from "./components/feedback/feedback";
import Notification from "./components/notification/notification";

function App() {
  const localStorageSaved = localStorage.getItem("saved-feedback");

  const [count, setCount] = useState(() => {
    if (localStorageSaved !== null) {
      return JSON.parse(localStorageSaved);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  function updateFeedback(feedbackType) {
    setCount({
      ...count,
      [feedbackType]: count[feedbackType] + 1,
    });
  }

  useEffect(() => {
    localStorage.setItem("saved-feedback", JSON.stringify(count));
  }, [count]);

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
      {totalFeedback > 0 ? (
        <Feedback
          feedbacks={count}
          positiveFeedbackPercent={positiveFeedback}
          totalFeedback={totalFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
