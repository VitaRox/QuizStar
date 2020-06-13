import React, {Component} from 'react';
import Switch from '../QuizCreateComponents/Switch';

class Answer extends Component {
	constructor(props){
		super(props);
	}

	state = {

	}

	handleChange = event => {
		const value = event.target.value;
		this.setState({
			...this.state,
			[event.target.name]: value
		}, () => {
			this.props.addAnswerValue(this.props.questionNumber-1, this.props.answerNumber-1, this.state.answer)
		})
	}

	render(){
		let qNum = this.props.questionNumber
		let aNum = this.props.answerNumber
		let switchID = "right_answer-" + {qNum} + "-" + {aNum}

		return(
			<span>
				<label for="answer">Answer {this.props.answerNumber}:</label>
				<input type="text" id="answer" name="answer" onChange={this.handleChange}/>
			</span>
		)
	}
}

export default Answer;

//<input type="radio" id="correctAnswer" name="correctAnswer" value={this.props.answerNumber}/><br/>
//<Switch id={switchID} value={this.props.answerNumber}/>
