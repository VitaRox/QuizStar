import React, {Component} from 'react';;

class Question extends Component {
	constructor(props){
		super(props);
	}

	render(){
		let elements = [];
		for(var n = 0; n < 5; n++){
			elements.push(
				<div>
					<form action="">
						<span>Question {n}</span><br/>
						<input type="text" id="fname" name="fname" value="John"/><br/>
						<input type="text" id="lname" name="lname" value="Doe"/><br/>
					</form>
					<button id="addQuestion" onclick="addQuestion()">Add Question</button>
				</div>
				);
		}
		return(
	        <div>
	        	{elements}
	        </div>
		)
	}
}

export default Question;