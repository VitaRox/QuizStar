import React, {Component} from 'react';
import Question from "../QuizCreate/question";


class QuizCreate extends Component {
    state = {
    	questionCount: 5
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
		return(
	        <div>
	            <main>
	            	<p>Number of Questions: {this.state.questionCount}</p>
	            	<button id="removeQuestion" onClick={ () => this.removeQuestions()}>Question -</button>
	            	<button id="addQuestion" onClick={ () => this.addQuestions()}>Question +</button>
	            	<Question questionCount={this.state.questionCount}/>
	            	<button id="addQuestion" onClick={ () => this.addQuestions()}>Question +</button>
	            </main>
	        </div>
		)
	}
}

export default QuizCreate;