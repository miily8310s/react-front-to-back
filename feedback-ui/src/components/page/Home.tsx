import { FeedbackForm } from "@/components/model/Feedback/FeedbackForm";
import { FeedbackList } from "@/components/model/Feedback/FeedbackList";
import { AboutPageLink } from "@/components/functional/Link/AboutPageLink";

export const Home = () => {
  return (
    <>
      <FeedbackForm />
      <FeedbackList />
      <AboutPageLink />
    </>
  );
};
