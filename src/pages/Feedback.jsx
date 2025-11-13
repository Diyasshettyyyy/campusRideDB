import React, { useState } from "react";
import "../styles/feedback.css";

export default function Feedback() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState("");
  const [feedbacks, setFeedbacks] = useState([
    { id: 1, name: "Alice", rating: 5, comment: "Great ride! Driver was punctual and friendly." },
    { id: 2, name: "Bob", rating: 4, comment: "Comfortable ride, enjoyed the conversation." },
    { id: 3, name: "Charlie", rating: 4.5, comment: "Smooth ride and affordable price." },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0 || comment.trim() === "") {
      alert("Please provide a rating and a comment.");
      return;
    }
    const newFeedback = {
      id: feedbacks.length + 1,
      name: "You", // or fetch user name if available
      rating,
      comment,
    };
    setFeedbacks([newFeedback, ...feedbacks]); // Add new feedback at the top
    setRating(0);
    setComment("");
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {"★".repeat(fullStars)}
        {halfStar && "☆"}
        {"☆".repeat(emptyStars)}
      </>
    );
  };

  return (
    <div className="feedback-page">
      <div className="feedback-container">
        <h1>Give Feedback</h1>
        <form className="feedback-form" onSubmit={handleSubmit}>
          {/* Star Rating */}
          <div className="star-rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`star ${star <= (hoverRating || rating) ? "filled" : ""}`}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
              >
                ★
              </span>
            ))}
          </div>

          {/* Comment */}
          <div className="form-group">
            <label htmlFor="comment">Your Comment</label>
            <textarea
              id="comment"
              placeholder="Write your feedback..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <button type="submit">Submit Feedback</button>
        </form>
      </div>

      {/* Existing Feedbacks */}
      <div className="existing-feedbacks">
        <h2>Recent Feedbacks</h2>
        {feedbacks.map((fb) => (
          <div key={fb.id} className="feedback-card">
            <div className="feedback-header">
              <span className="feedback-name">{fb.name}</span>
              <span className="feedback-rating">{renderStars(fb.rating)} ({fb.rating})</span>
            </div>
            <p className="feedback-comment">{fb.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
