import React, {Component} from 'react';
import Answer from "../QuizCreate/answer";
import OptionInputForm from '../QuizCreateComponents/OptionInputForm';

class Question extends Component {
	constructor(props){
		super(props);
	}

	state = {
    	answerCount: 2,
	}

	addAnswer = () => {
		if(this.state.answerCount < 4){
			this.setState({answerCount: this.state.answerCount+1}, () => {
				this.props.addAnswerState(this.props.questionNumber-1);
			})
		}
	}

	removeAnswer = () => {
		if(this.state.answerCount > 2){
			this.setState({answerCount: this.state.answerCount-1}, () => {
				this.props.removeAnswerState(this.props.questionNumber-1);
			})
		}
	}

	handleChange = event => {
		const value = event.target.value;
		this.setState({
			...this.state,
			[event.target.name]: value
		}, () => {
			this.props.addQuestionValue(this.props.questionNumber-1, this.state.question, this.state.correctAnswer)
		})
	}

	handleChangeRadio = event => {
		const value = event.target.value;
		this.setState({
			correctAnswer: value
		}, () => {
			this.props.addQuestionValue(this.props.questionNumber-1, this.state.question, this.state.correctAnswer)
		})
	}

	render(){
		let elements = [];
		for(var n = 0; n < this.state.answerCount; n++){
			var answerId = "correctAnswer"+this.props.questionNumber;
			elements.push(
				<div>
				<Answer questionNumber = {this.props.questionNumber} answerNumber={n+1} addAnswerValue={this.props.addAnswerValue}/>
				<input type="radio" id="correctAnswer" name={answerId} value={n+1} onChange={this.handleChangeRadio}/><br/>
				</div>
				);
		}

		return(
			<div>
				<label for="question">Question {this.props.questionNumber}:</label>
				<input type="text" id="question" name="question" value={this.state.question} onChange={this.handleChange}/><br/>
				{elements}
				<button id="removeAnswer" onClick={ () => this.removeAnswer()}>Answer -</button>
	        	<button id="addAnswer" onClick={ () => this.addAnswer()}>Answer +</button>
        	</div>
		)
	}
}

export default Question;
