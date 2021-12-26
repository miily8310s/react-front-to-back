import { createContext, ReactNode, useEffect, useState } from "react";

const BASE_URL = "http://localhost:8080";

interface FeedBack {
  id: number;
  rating: number;
  text: string;
}
interface FeedBackEdit {
  item: FeedBack;
  edit: boolean;
}
interface FeedContextType {
  isLoading: boolean;
  feedback: FeedBack[];
  feedbackEdit: FeedBackEdit;
  addFeedback: (newFeedback: FeedBack) => Promise<void>;
  deleteFeedback: (id: number) => Promise<void>;
  updateFeedback: (id: number, updateItem: FeedBack) => Promise<void>;
  editFeedback: (item: FeedBack) => void;
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
    const response = await fetch(`/feedback/${id}`, {
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
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
