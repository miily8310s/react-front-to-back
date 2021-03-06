import { createContext, ReactNode, useEffect, useState } from "react";
import { FeedBack, FeedBackEdit } from "@/entities/Feedback";
import { axiosClient } from "@/lib/axios/axiosClient";

interface FeedContextType {
  isLoading: boolean;
  feedbacks: FeedBack[];
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
  const [feedbacks, setFeedbacks] = useState<FeedBack[]>([]);
  const [feedbackEdit, setFeedbackEdit] = useState<FeedBackEdit>({
    item: {} as FeedBack,
    edit: false,
  });
  const fetchFeedback = async () => {
    const { data } = await axiosClient.get(`feedback?_sort=id`);
    setFeedbacks(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchFeedback();
  }, []);

  const addFeedback = async (newFeedback: FeedBack) => {
    const { data } = await axiosClient.post("feedback", newFeedback);
    setFeedbacks([data, ...feedbacks]);
  };

  const deleteFeedback = async (id: number) => {
    if (window.confirm("本当に削除しますか?")) {
      await axiosClient.delete(`feedback/${id}`);

      setFeedbacks(feedbacks.filter((item) => item.id !== id));
    }
  };

  const updateFeedback = async (id: number, updateItem: FeedBack) => {
    const { data } = await axiosClient.put(`feedback/${id}`, updateItem);

    setFeedbacks(
      feedbacks.map((item) => (item.id === id ? { ...item, ...data } : item))
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
    const feedbackRatingSum = feedbacks.reduce((pre, cur) => {
      return pre + cur.rating;
    }, 0);
    const feedbackRatingAverage = feedbackRatingSum / feedbacks.length;
    return isNaN(feedbackRatingAverage)
      ? "0"
      : feedbackRatingAverage.toFixed(1);
  };

  return (
    <FeedbackContext.Provider
      value={{
        isLoading,
        feedbacks,
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
