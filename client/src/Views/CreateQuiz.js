import React, {useState, useEffect} from 'react';
import QuestionInputForm from '../components/QuestionInputForm';
import OptionInputForm from '../components/OptionInputForm';

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