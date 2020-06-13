import React, {Component} from 'react';
import Question from "../QuizCreate/question";
import axios from 'axios';
// import QuizCreateComponents from '.././QuizCreateComponents';
// import OptionInputForm from '../QuizCreateComponents/OptionInputForm';
class QuizCreate extends Component {
	state = {
		questionCount: 1,
		quizName: "",
		quizCreator: "",
		questions: [{
			question: "",
			correctAnswer: 1,
			answers: [{answer:""}, {answer:""}]
		}]
	}

	addQuestions = () => {
		if(this.state.questionCount <= 9){
			this.setState({questionCount: this.state.questionCount+1
			}, () => {
				var value = ({
					question: "",
					correctAnswer: 1,
					answers: [{answer:""}, {answer:""}]
				})

				let newState = [];
				newState = this.state.questions.slice();
				newState[this.state.questionCount-1] = value;

				this.setState({questions: newState});
			})
		}
	}

	removeQuestions = () => {
		if(this.state.questionCount > 1){
			this.setState({questionCount: this.state.questionCount-1});

			let newState = [];
			newState = this.state.questions.slice();
			newState.pop();

			this.setState({questions: newState});
		}
	}

	handleChange = event => {
      const value = event.target.value;
      this.setState({
          ...this.state,
        [event.target.name]: value
      })
	}

	addQuestionValue = (index, question, correctAnswer) => {
    	var value = ({
    		question: question,
    		correctAnswer: correctAnswer
    	})

    	if(typeof question === 'undefined'){
    		value.question = '';
    	}

    	let newQuestions = this.state.questions.slice();
    	let newQuestion = newQuestions[index];
    	let answers = newQuestion.answers;

    	value.answers = answers;
    	
    	newQuestions[index] = value;

    	this.setState({
    		questions: newQuestions
    	})
    }

    addAnswerValue = (questionIndex, answerIndex, answerString) => {
    	var value = ({
    		answer: answerString
    	})

    	let questions = this.state.questions.slice();
    	let question = questions[questionIndex];
    	let answers = question.answers;
    	answers[answerIndex] = value;
    	question.answers = answers;
    	questions[questionIndex] = question;
    	console.log(this.state)
    	
    	this.setState({
    		questions: questions
    	})
    }

    addAnswerState = (questionIndex) => {
    	var value = ({
    		answer: ""
    	})

    	let questions = this.state.questions.slice();
    	let question = questions[questionIndex];
    	let answers = question.answers;
    	answers.push(value);
    	question.answers = answers;
    	questions[questionIndex] = question;
    	
    	this.setState({
    		questions: questions
    	})
    }

    removeAnswerState = (questionIndex) => {
    	let questions = this.state.questions.slice();
    	let question = questions[questionIndex];
    	let answers = question.answers;
    	answers.pop();
    	question.answers = answers;
    	questions[questionIndex] = question;
    	
    	this.setState({
    		questions: questions
    	})
    }

	submit = () => {
    //event.preventDefault();
	    axios.post('/quizcreate', this.state)
			.then(res => {
				console.log(res);
				console.log(res.data);
			})
	}

	render(){
		let elements = [];
		for(var n = 0; n < this.state.questionCount; n++){
			elements.push(<Question questionNumber={n+1} addQuestionValue={this.addQuestionValue} addAnswerValue={this.addAnswerValue} addAnswerState={this.addAnswerState} removeAnswerState={this.removeAnswerState} />);
		}

		return(
	        <div className= "addQuiz-Form">
	            <main>
	            	<button id="showState" onClick={ () => console.log(this.state)}>Display State</button><br/>
					<label for="quizName">Quiz Name:</label>
					<input type="text" id="quizName" name="quizName" value={this.state.quizName} onChange={this.handleChange}/><br/>
					<label for="quizCreator">Quiz Creator:</label>
					<input type="text" id="quizCreator" name="quizCreator" value={this.state.quizCreator} onChange={this.handleChange}/><br/>
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
