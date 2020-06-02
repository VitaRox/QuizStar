import React, {Component} from 'react';
import Question from "../QuizCreate/question";
// import QuizCreateComponents from '.././QuizCreateComponents';
// import OptionInputForm from '../QuizCreateComponents/OptionInputForm';
class QuizCreate extends Component {
	state = {
		questionCount: 1
	}

	addQuestions = () => {
		if(this.state.questionCount <= 9){
			this.setState({questionCount: this.state.questionCount+1})
		}
	}

	removeQuestions = () => {
		if(this.state.questionCount > 1){
			this.setState({questionCount: this.state.questionCount-1})
		}	
	}

	render(){
		let elements = [];
		for(var n = 0; n < this.state.questionCount; n++){
			elements.push(<Question questionNumber={n+1}/>);
		}

		return(
	        <div>
	            <main>
					<label for="quizName">Quiz Name:</label>
					<input type="text" id="quizName" name="quizName"/><br/>
	            	<button id="removeQuestion" onClick={ () => this.removeQuestions()}>Question -</button>
	            	<button id="addQuestion" onClick={ () => this.addQuestions()}>Question +</button>
	            	{elements}
	            	<button id="addQuestion" onClick={ () => this.addQuestions()}>Question +</button>
	            </main>
	        </div>
	    )
	}
}

export default QuizCreate;