import React from 'react';

export default function AnswerCard({ card, showNextQuestion }) {
  return (
    <>
<div className='d-flex flex-column justify-content-center m-3 w-25'>
    <h1>Answer:</h1>
    <div className='card'>
      <div className='card-body'>
        <h5 className='card-title'>{card.answer}</h5>
        <button className='ml-1' id={card.firebaseKey} onClick={(e) => showNextQuestion(e)} >Next Question</button>
      </div>
    </div>
    </div>
    </>
  );
}
