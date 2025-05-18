// frontend/src/pages/QuizStart.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const QuizStart = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Starting Quiz {id}</h1>
      {/* TODO: load quiz questions and timer */}
    </div>
  );
};

export default QuizStart;
