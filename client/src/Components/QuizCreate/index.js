import React, {Component} from 'react';
import Question from "../QuizCreate/question";

class QuizCreate extends Component {
    state = {
    	questionCount: 5
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
	            	<Question questionCount={this.state.questionCount} addQuestions={this.addQuestions} removeQuestions={this.removeQuestions}/>
	            </main>
	        </div>
		)
	}
}

export default QuizCreate;


/*
import React, {Component} from 'react';

class Nav extends Component {
	constructor(props){
		super(props);
	}
	render(){
		return(<ul id='nav'>
			<li class='navItem'><a href='javascript:;' onClick={this.props.changePage0}>Menu</a></li>
			<li class='navItem'><a href='javascript:;' onClick={this.props.changePage1}>Ingredients</a></li>
		</ul>)
	}
}

export default Nav
*/