"use client"
import React, { useState } from "react";

export default function CustomerFeedback() {
  // Sample feedback data
  const [feedbacks, setFeedbacks] = useState([
    {
      id: 1,
      customerName: "John Doe",
      rating: 5,
      comment: "Excellent service, will come again!",
      reply: "Thank you, John! We look forward to serving you again!",
    },
    {
      id: 2,
      customerName: "Jane Smith",
      rating: 3,
      comment: "The food was good, but the service was slow.",
      reply: "",
    },
  ]);

  const [newFeedback, setNewFeedback] = useState({
    customerName: "",
    rating: 0,
    comment: "",
  });

  const handleFeedbackChange = (e) => {
    setNewFeedback({
      ...newFeedback,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddFeedback = () => {
    if (newFeedback.customerName && newFeedback.comment && newFeedback.rating > 0) {
      setFeedbacks([
        ...feedbacks,
        { ...newFeedback, id: feedbacks.length + 1, reply: "" },
      ]);
      setNewFeedback({
        customerName: "",
        rating: 0,
        comment: "",
      });
    }
  };

  const handleReply = (id, reply) => {
    setFeedbacks(
      feedbacks.map((feedback) =>
        feedback.id === id ? { ...feedback, reply } : feedback
      )
    );
  };

  // Calculate average rating
  const averageRating =
    feedbacks.reduce((total, feedback) => total + feedback.rating, 0) /
    feedbacks.length;

  return (
    <div className="bg-white shadow p-6 rounded-lg">
               <h2 className="text-3xl font-bold text-orange-400 text-center mb-8 flex items-center justify-center italic animate-pulse">
  <span className="w-1/12 border-t-2 border-orange-400 mr-2 "></span>Customer Feedback & Reviews
  <span className="w-1/12 border-t-2 border-orange-400 ml-2"></span>
</h2>
      {/* Feedback Submission Form */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-3 text-orange-400 ml-16"
                     style={{ fontFamily: "'Times New Roman', Times, serif" }}
        >Submit Your Feedback</h3>
        <div className="space-y-4">
          <input
            type="text"
            name="customerName"
            value={newFeedback.customerName}
            onChange={handleFeedbackChange}
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded"
          />
          <textarea
            name="comment"
            value={newFeedback.comment}
            onChange={handleFeedbackChange}
            placeholder="Your Comment"
            className="w-full p-3 border border-gray-300 rounded"
            rows="4"
          />
          <div>
            <label className="block mb-2 font-bold">Rating (1-5):</label>
            <input
              type="number"
              name="rating"
              value={newFeedback.rating}
              onChange={handleFeedbackChange}
              min="1"
              max="5"
              className="w-full p-3 border border-gray-300 rounded"
            />
          </div>
          <button
            onClick={handleAddFeedback}
            className="bg-red-400 text-white px-2 py-2 rounded hover:bg-red-600 font-bold text-xl"
            style={{ fontFamily: "'Times New Roman', Times, serif" }}
          >
            Submit Feedback
          </button>
        </div>
      </div>

      {/* Feedback List */}
      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-3 text-orange-400 ml-16"
                     style={{ fontFamily: "'Times New Roman', Times, serif" }}
        >Customer Reviews</h3>
        <ul className="space-y-4">
          {feedbacks.map((feedback) => (
            <li key={feedback.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
              <p>
                <strong>{feedback.customerName}</strong> (Rating: {feedback.rating})
              </p>
              <p>{feedback.comment}</p>
              <p>
                <strong>Reply:</strong> {feedback.reply || "No reply yet."}
              </p>
              <div className="mt-4 flex gap-2">
                <input
                  type="text"
                  placeholder="Reply to review"
                  onChange={(e) => handleReply(feedback.id, e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <button
                  onClick={() => handleReply(feedback.id, feedback.reply)}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  Reply
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Average Rating */}
      <div className="mt-6">
        <h3 className="text-2xl font-bold mb-3 text-orange-400 ml-16"
                     style={{ fontFamily: "'Times New Roman', Times, serif" }}
        >Average Rating</h3>
        <p>Average Rating: {averageRating.toFixed(2)} / 5</p>
      </div>
    </div>
  );
}
