import React from 'react';

export default function MyFlashCards({ card }) {
  return (
    <div>
      <h3>Question:</h3>
      <p>{card.question}</p>
      <h3>Answer:</h3>
      <p>{card.answer}</p>
      <div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
}
