import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import FeedbackData from '../Data/FeedbackData'


const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
  const [feedback, setFeedback] = useState(FeedbackData)
  const[editFeedback, setEditFeedback] = useState({
    feed: {},
    edit: false
  })


  // delete feedback
  const feedbackDelete = (id) => {
    if (window.confirm("Are you want to sure delete ?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
//  Add Feedback

 const handleAddFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  // Edit handler
  const feedbackEditHandler = (feed) => {
    setEditFeedback({
      feed,
      edit: true
    })
  }

  // updated items

  const updateFeedback = (id, updItem) => {
  setFeedback(feedback.map(item => item.id === id ? {
    ...item, ...updItem
  } : item))
 }
return <FeedbackContext.Provider value=
    {{
      feedback,
      editFeedback,
      feedbackDelete,
      handleAddFeedback,
      feedbackEditHandler,
      updateFeedback
      
      }}>
  {children}
</FeedbackContext.Provider>
}

export default FeedbackContext;