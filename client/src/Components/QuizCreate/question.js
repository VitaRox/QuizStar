import React, {Component} from 'react';
import Answer from "../QuizCreate/answer";
import OptionInputForm from '../QuizCreateComponents/OptionInputForm';

class Question extends Component {
	constructor(props){
		super(props);
	}

	state = {
    	answerCount: 2
	}

	addAnswer = () => {
		if(this.state.answerCount < 4){
			this.setState({answerCount: this.state.answerCount+1})
		}
	}

	removeAnswer = () => {
		if(this.state.answerCount > 2){
			this.setState({answerCount: this.state.answerCount-1})
		}	
	}

	render(){
		let elements = [];
		for(var n = 0; n < this.state.answerCount; n++){
			elements.push(<OptionInputForm answerNumber={n+1}/>);
		}

		return(
			<div>
				<form action="">
					<label for="question">Question {this.props.questionNumber}:</label>
					<input type="text" id="question" name="question"/><br/>
					{elements}
				</form>
				<button id="removeAnswer" onClick={ () => this.removeAnswer()}>Answer -</button>
	        	<button id="addAnswer" onClick={ () => this.addAnswer()}>Answer +</button>
        	</div>
		)
	}
}

export default Question;