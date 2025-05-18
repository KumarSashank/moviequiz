// frontend/src/pages/Home.jsx
import React from 'react';
import QuizCard from '../components/QuizCard';

const Home = () => {
  // later you’ll fetch real quizzes here…
  return (
    <div>
      <h1>Available Quizzes</h1>
      {/* Example placeholder */}
      <QuizCard
        quiz={{
          id: '1',
          title: 'Sample Quiz',
          description: 'This is a placeholder quiz.',
          previewImageUrl: '',
          duration: 10,
        }}
      />
    </div>
  );
};

export default Home;
