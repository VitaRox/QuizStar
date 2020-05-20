import React from 'react';

var numberOfQuestions = 1;

function addQuestion(){
	console.log(Math.random());
}

function test(numberOfQuestions){
	var elements = [];
	for(var n = 0; n < numberOfQuestions; n++){
		elements.push(
			<div>
				<form action="">
					<span>Question {n}</span><br/>
					<input type="text" id="fname" name="fname" value="John"/><br/>
					<input type="text" id="lname" name="lname" value="Doe"/><br/>
				</form>
				<button id="addQuestion" onclick="addQuestion()">Add Question</button>
			</div>
			);
	}
	return(
		<div>
			{elements}
		</div>
		)
}

const QuizCreate= ()=> {  
    return(
        <div>
            <main>
            	<p>Number of Questions: {numberOfQuestions}</p>
                {test(1)}
            </main>
        </div>
        )
}
export default QuizCreate;