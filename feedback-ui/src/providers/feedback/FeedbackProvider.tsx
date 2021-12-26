import { createContext, ReactNode, useEffect, useState } from "react";
import { FeedBack, FeedBackEdit } from "../../entities/Feedback";

const BASE_URL = "http://localhost:8080";

interface FeedContextType {
  isLoading: boolean;
  feedback: FeedBack[];
  feedbackEdit: FeedBackEdit;
  addFeedback: (newFeedback: FeedBack) => Promise<void>;
  deleteFeedback: (id: number) => Promise<void>;
  updateFeedback: (id: number, updateItem: FeedBack) => Promise<void>;
  editFeedback: (item: FeedBack) => void;
  getFeedbackRatingAverage: () => string;
}

const FeedbackContext = createContext<FeedContextType>({} as FeedContextType);

export const FeedbackProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState<FeedBack[]>([]);
  const [feedbackEdit, setFeedbackEdit] = useState<FeedBackEdit>({
    item: {} as FeedBack,
    edit: false,
  });
  const fetchFeedback = async () => {
    const response = await fetch(`${BASE_URL}/feedback?_sort=id`);
    const data = await response.json();
    setFeedback(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchFeedback();
  }, []);

  const addFeedback = async (newFeedback: FeedBack) => {
    const response = await fetch(`${BASE_URL}/feedback`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });

    const data = await response.json();

    setFeedback([data, ...feedback]);
  };

  const deleteFeedback = async (id: number) => {
    if (window.confirm("本当に削除しますか?")) {
      await fetch(`${BASE_URL}/feedback/${id}`, { method: "DELETE" });

      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const updateFeedback = async (id: number, updateItem: FeedBack) => {
    const response = await fetch(`${BASE_URL}/feedback/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateItem),
    });

    const data = await response.json();

    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
  };

  const editFeedback = (item: FeedBack) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  /**
   * @returns {string} feedbackのときは0、それ以外はfeedback.ratingの平均値を返す
   * @see https://stackoverflow.com/questions/18838301/in-javascript-why-does-zero-divided-by-zero-return-nan-but-any-other-divided-b
   */
  const getFeedbackRatingAverage = () => {
    const feedbackRatingSum = feedback.reduce((pre, cur) => {
      return pre + cur.rating;
    }, 0);
    const feedbackRatingAverage = feedbackRatingSum / feedback.length;
    return isNaN(feedbackRatingAverage)
      ? "0"
      : feedbackRatingAverage.toFixed(1);
  };

  return (
    <FeedbackContext.Provider
      value={{
        isLoading,
        feedback,
        feedbackEdit,
        addFeedback,
        deleteFeedback,
        updateFeedback,
        editFeedback,
        getFeedbackRatingAverage,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
