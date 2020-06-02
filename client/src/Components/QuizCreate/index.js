import React, {Component} from 'react';
import Question from "../QuizCreate/question";
import axios from 'axios';
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

	handleChange = event => {
      const value = event.target.value;
      this.setState({
          ...this.state,
        [event.target.name]: value
      });
}

	submit = () => {
    //event.preventDefault();
	    axios.post('/quizcreate', this.state)
			.then(res => {
				console.log(res);
				console.log(res.data);
			})
		console.log("Hello")

	}

	render(){
		let elements = [];
		for(var n = 0; n < this.state.questionCount; n++){
			elements.push(<Question questionNumber={n+1}/>);
		}

		return(
	        <div className= "addQuiz-Form">
	            <main>
					<label for="quizName">Quiz Name:</label>
					<input type="text" id="quizName" name="quizName" value={this.state.quizName} onChange={this.handleChange}/><br/>
	            	<button id="removeQuestion" onClick={ () => this.removeQuestions()}>Question -</button>
	            	<button id="addQuestion" onClick={ () => this.addQuestions()}>Question +</button>
	            	{elements}
	            	<input type="submit" value="Submit" onClick={ () => this.submit()}/>
	            </main>
	        </div>
	    )
	}
}

export default QuizCreate;
