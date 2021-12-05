import React from 'react'
import Button from "../button/Button";


function FeedbackOptions({ onLeaveFeedback, options }) {
  return (
    <>
      {options.map((option) => (
        <Button key={option} label={option} onClick={onLeaveFeedback} />
      ))}
    </>
  );
}

export default FeedbackOptions
