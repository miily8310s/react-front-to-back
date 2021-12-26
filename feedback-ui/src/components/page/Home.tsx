import { FeedbackForm } from "@/components/model/Feedback/FeedbackForm";
import { FeedbackList } from "@/components/model/Feedback/FeedbackList";

export const Home = () => {
  return (
    <>
      <FeedbackForm />
      <FeedbackList />
    </>
  );
};
