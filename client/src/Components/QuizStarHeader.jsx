import React, {useState, useEffect} from 'react';

/*
  Bone-simple component to render the QuizStar logo header at the top of the page;
  Perhaps can alter color of it depending on the view user is in?
 */
function QuizStarHeader() {

  return(
    <div className="pageTitle">
      <h1>*** QuizStar ***</h1>
    </div>
  );
};

export default QuizStarHeader;