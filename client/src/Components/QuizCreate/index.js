import React, {Component} from 'react';
import Question from "../QuizCreate/question";

class QuizCreate extends Component {
    state = {
    	questionCount: 3
	}

	addQuestions = () => {
		this.setState({questionCount: 1})
	}

	removeQuestions = () => {
		this.setState({questionCount: 2})
	}

	render(){
		return(
	        <div>
	            <main>
	            	<p>Number of Questions: {this.state.questionCount}</p>
	            	<button id="addQuestion" onclick={this.props.addQuestions}>Question -</button>
	            	<Question questionCount={this.state.questionCount}/>
	            	<button id="removeQuestion" onclick={this.props.removeQuestions}>Question +</button>
	            </main>
	        </div>
		)
	}
}

export default QuizCreate;