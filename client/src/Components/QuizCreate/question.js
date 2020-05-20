import React, {Component} from 'react';;

class Question extends Component {
	constructor(props){
		super(props);
	}

	render(){
		let elements = [];
		for(var n = 0; n < this.props.questionCount; n++){
			elements.push(
				<div>
					<form action="">
						<span>Question {n+1}</span><br/>
						<input type="text" id="fname" name="fname" value="John"/><br/>
						<input type="text" id="lname" name="lname" value="Doe"/><br/>
					</form>
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