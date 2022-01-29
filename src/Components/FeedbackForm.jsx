import React from "react";
import { useState, useContext, useEffect } from "react";
import Card from "./Shared/Card";
import Button from "./Shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../Context/FeedbackContext";

const FeedbackForm = () => {
  const {handleAddFeedback, editFeedback, updateFeedback} = useContext(FeedbackContext)
  const [text, setText] = useState("");
  const [rating, setRating] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

// Edit the Feedback Change Handler

useEffect(() => {
  if(editFeedback.edit === true){
  setBtnDisabled(false)
  setText(editFeedback.feed.text)
  setRating(editFeedback.feed.rating)
  }
}, [editFeedback])

  //  Input Handler Change Function
  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setMessage("Text must be atleast 10 characters");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };
  const formHandlerSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };

      if(editFeedback.edit === true){
        updateFeedback(editFeedback.feed.id, newFeedback)
      }else{
        handleAddFeedback(newFeedback);
      }
      setText("");
    }
  };
  return (
    <Card>
      <form onSubmit={formHandlerSubmit}>
        <h2>How woild you rate your service with us?</h2>
        {/* @todo rating select component */}

        <RatingSelect select={(rating) => setRating(rating)} />

        <div className="input-group">
          <input
            value={text}
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
