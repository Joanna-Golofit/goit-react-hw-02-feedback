// import React from 'react'
import Button from "../button/Button";
import PropTypes from "prop-types";

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <>
      {options.map((option) => (
        <Button key={option} label={option} onClick={onLeaveFeedback} />
      ))}
    </>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
  options: PropTypes.array,
};

export default FeedbackOptions
