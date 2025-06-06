import React from 'react'
import profilePng from "../../image/Profile.png";
import Rating from "@mui/material/Rating";

function ReviewCard({ review }) {
    const options = {
        value: review.rating,
        readOnly: true,
        precision: 0.5,
      };

  return (
    <div className="reviewCard">
    <img src={profilePng} alt="User" />
    <p>{review.name}</p>
    <Rating {...options} />
    <span className="reviewCardComment">{review.comment}</span>
  </div>
  )
}

export default ReviewCard