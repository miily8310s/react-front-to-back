import { useContext } from "react";
import FeedbackContext from "@/providers/feedback/FeedbackProvider";
import { Spinner } from "@/components/ui/Spinner";
import { FeedbackItem } from "@/components/model/Feedback/FeedbackItem";
import styles from "./Feedback.module.scss";

export const FeedbackList = () => {
  const { isLoading, feedbacks, getFeedbackRatingAverage } =
    useContext(FeedbackContext);
  return isLoading ? (
    <Spinner />
  ) : (
    <>
      <div className="feedbackList">
        {feedbacks.map((item) => (
          <FeedbackItem key={`${item.id}_${item.text}`} item={item} />
        ))}
      </div>
      <div className={styles.feedbackStatus}>
        <h4>{feedbacks.length} Reviews</h4>
        <h4>Average Rating: {getFeedbackRatingAverage()}</h4>
      </div>
    </>
  );
};
