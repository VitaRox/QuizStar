import React, {Component} from 'react';
import Switch from '../QuizCreateComponents/Switch';

class Answer extends Component {
	constructor(props){
		super(props);
	}

	render(){
		let qNum = this.props.questionNumber
		let aNum = this.props.answerNumber
		let switchID = "right_answer-" + {qNum} + "-" + {aNum}

		return(
			<div>
				<label for="answer">Answer {this.props.answerNumber}:</label>
				<input type="text" id="answer" name="answer"/>
				<Switch id={switchID} value={this.props.answerNumber}/>
			</div>
		)
	}
}

export default Answer;

//<input type="radio" id="correctAnswer" name="correctAnswer" value={this.props.answerNumber}/><br/>