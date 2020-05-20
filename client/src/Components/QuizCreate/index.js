import React, {Component} from 'react';
import Question from "../QuizCreate/question";

class QuizCreate extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
	        <div>
	            <main>
	            	<p>Number of Questions: </p>
	            	<Question/>
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