import React, {useState, useEffect} from 'react';
import QuestionInputForm from '../Components/QuestionInputForm';
import OptionInputForm from '../Components/OptionInputForm';

// This implements the view through which the user can design and save a new Quiz;
function CreateQuiz() {

  return(
    <div>
      <h1>Create a New Quiz</h1>
      <QuestionInputForm />
      <p>
        <OptionInputForm />
      </p>

    </div>
  );
};

export default CreateQuiz;