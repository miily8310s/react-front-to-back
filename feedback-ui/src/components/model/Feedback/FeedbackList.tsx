import { useContext } from "react";
import FeedbackContext from "../../../providers/feedback/FeedbackProvider";
import { Spinner } from "../../ui/Spinner";
import { FeedbackItem } from "./FeedbackItem";

export const FeedbackList = () => {
  const { isLoading, feedback } = useContext(FeedbackContext);
  return isLoading ? (
    <Spinner />
  ) : (
    <div className="feedbackList">
      {feedback.map((item) => (
        <FeedbackItem key={`${item.id}_${item.text}`} item={item} />
      ))}
    </div>
  );
};
