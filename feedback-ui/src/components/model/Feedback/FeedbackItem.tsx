import { useContext } from "react";
import { FaTimes, FaEdit } from "react-icons/fa";
import FeedbackContext from "../../../providers/feedback/FeedbackProvider";
import { Card } from "../../ui/Card";
import { FeedBack } from "../../../entities/Feedback";

export const FeedbackItem = ({ item }: { item: FeedBack }) => {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
  return (
    <Card>
      <div className="feedbackRating">{item.rating}</div>
      <button
        onClick={() => deleteFeedback(item.id)}
        className="feedbackDelete"
      >
        <FaTimes />
      </button>
      <button onClick={() => editFeedback(item)} className="feedbackEdit">
        <FaEdit />
      </button>
      <div className="feedbackText">{item.text}</div>
    </Card>
  );
};
