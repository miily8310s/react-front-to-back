import { ChangeEvent, FormEvent, useContext, useState, useEffect } from "react";
import FeedbackContext from "@/providers/feedback/FeedbackProvider";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { getNumberArray } from "@/utils/NumberUtils";
import styles from "./Feedback.module.scss";

export const FeedbackForm = () => {
  const { addFeedback, updateFeedback, feedbackEdit, feedbacks } =
    useContext(FeedbackContext);
  const [text, setText] = useState("");
  const [rating, setRating] = useState(5);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (feedbackEdit.edit) {
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);

    if (text === "") {
      setBtnDisabled(true);
      setMessage("");
      return;
    }
    if (text.trim().length < 10) {
      setBtnDisabled(true);
      setMessage("スペースを除く最低10文字の入力をお願いします");
      return;
    }
    setMessage("");
    setBtnDisabled(false);
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newFeedback = {
      id: feedbackEdit.edit ? feedbackEdit.item.id : feedbacks.length + 1,
      text,
      rating,
    };
    if (feedbackEdit.edit) {
      updateFeedback(feedbackEdit.item.id, newFeedback);
      setText("");
    }
    addFeedback(newFeedback);
    setText("");
  };

  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRating(+e.target.value);
  };

  return (
    <Card>
      <form onSubmit={handleFormSubmit}>
        <h2>フィードバックをお願いします</h2>
        <ul className={styles.feedbackRating}>
          {getNumberArray(5).map((num) => (
            <li key={`${num}`}>
              <input
                type="radio"
                name="rating"
                id={`num${num}`}
                value={num}
                checked={rating === num}
                onChange={handleRadioChange}
              />
              <label htmlFor={`num${num}`}>{num}</label>
            </li>
          ))}
        </ul>
        <div className={styles.feedbackInputGroup}>
          <input
            onChange={handleTextChange}
            type="text"
            value={text}
            placeholder="レビューをここに記載してください"
          />
          <Button type="submit" disabled={btnDisabled} version="primary">
            送信
          </Button>
        </div>
        {message && <div className="formMessage">{message}</div>}
      </form>
    </Card>
  );
};
