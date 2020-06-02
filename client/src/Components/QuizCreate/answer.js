import React, {Component} from 'react';

class Answer extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div>
				<label for="answer">Answer {this.props.answerNumber}:</label>
				<input type="text" id="answer" name="answer"/>
				<input type="radio" id="correctAnswer" name="correctAnswer" value={this.props.answerNumber}/><br/>
			</div>
		)
	}
}

export default Answer;