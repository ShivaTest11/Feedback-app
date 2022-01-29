import {motion, AnimatePresence} from 'framer-motion';
import React from "react";
import { useContext } from 'react';
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from '../Context/FeedbackContext';

const FeedbackList = () => {
  const {feedback} = useContext(FeedbackContext)
  if (!feedback || feedback.length === 0) {
    return <p>There is no feedback yet...</p>;
  }
  // return (
  //   <div className="feedback-list">
  //     {feedback.map((feed) => (
  //       <FeedbackItem feed={feed} key={feed.id} handleDelete={handleDelete} />
  //     ))}
  //   </div>
  // );

  return (
    <div className="feedback-list">
    <AnimatePresence>
      {feedback.map((feed) => (
        <motion.div key={feed.id} initial={{opacity: 0}} animate={{opacity:1}} exit={{opacity:0}}>
          <FeedbackItem feed={feed} key={feed.id}  />
        </motion.div>
        
      ))}
      </AnimatePresence>
    </div>
  );
};


export default FeedbackList;
