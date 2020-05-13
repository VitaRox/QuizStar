import React, {useEffect, useState} from 'react';

/*
  A form to enter the name of the new Quiz the user is creating from the CreateQuiz view;
  @return quizName, the name of the new Quiz;
 */
function QuizNameInputForm() {

  const [quizNameInput, setQuizNameInput] = useState("");

  const quizName = () => {
    setQuizNameInput(quizNameInput);
  };

  return (
    <div>
      <form>
        <input
          value={quizNameInput}
          onChange={e => setQuizNameInput(e.target.value)}
          placeholder="What will you call this quiz?"
          type="text"
          name="quizName"
          required
        />
        <button type="submit" className="submitButton" onClick={quizName}>Submit your response.</button>
      </form>
    </div>
  );
};

export default QuizNameInputForm;