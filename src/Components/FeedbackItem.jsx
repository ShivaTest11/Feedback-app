import React from "react";
import PropTypes from "prop-types";
import { FaTimes, FaEdit } from "react-icons/fa";
import { useContext } from "react";
import FeedbackContext from "../Context/FeedbackContext";

import Card from "./Shared/Card";

function FeedbackItem({ feed }) {
  const { feedbackDelete, feedbackEditHandler } = useContext(FeedbackContext);
  return (
    <Card>
      <div className="num-display">{feed.rating}</div>

      <button onClick={() => feedbackDelete(feed.id)} className="close">
        <FaTimes color="purple" />
      </button>

      <button className="edit" onClick={() => feedbackEditHandler(feed)}>
        <FaEdit color="purple" />
      </button>

      <div className="text-display">{feed.text}</div>
    </Card>
  );
}
FeedbackItem.propTypes = {
  feed: PropTypes.object.isRequired,
};
export default FeedbackItem;
