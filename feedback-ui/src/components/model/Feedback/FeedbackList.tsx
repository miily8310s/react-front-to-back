import { useContext } from "react";
import FeedbackContext from "../../../providers/feedback/FeedbackProvider";
import { Spinner } from "../../ui/Spinner";

export const FeedbackList = () => {
  const { isLoading, feedback } = useContext(FeedbackContext);
  return isLoading ? (
    <Spinner />
  ) : (
    <div className="feedbackList">
      {feedback.map((item) => (
        <div>{item.id}</div>
      ))}
    </div>
  );
};
