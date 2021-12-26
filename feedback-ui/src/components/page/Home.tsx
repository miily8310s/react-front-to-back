import { FeedbackForm } from "../model/Feedback/FeedbackForm";
import { FeedbackList } from "../model/Feedback/FeedbackList";

export const Home = () => {
  return (
    <>
      <FeedbackForm />
      <FeedbackList />
    </>
  );
};
