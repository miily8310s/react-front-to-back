import { useContext } from "react";
import FeedbackContext from "../../../providers/feedback/FeedbackProvider";
import { Spinner } from "../../ui/Spinner";
import { FeedbackItem } from "./FeedbackItem";

export const FeedbackList = () => {
  const { isLoading, feedback, getFeedbackRatingAverage } =
    useContext(FeedbackContext);
  return isLoading ? (
    <Spinner />
  ) : (
    <>
      <div className="feedbackList">
        {feedback.map((item) => (
          <FeedbackItem key={`${item.id}_${item.text}`} item={item} />
        ))}
      </div>
      <div className="feedbackStatus">
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating: {getFeedbackRatingAverage()}</h4>
      </div>
    </>
  );
};
