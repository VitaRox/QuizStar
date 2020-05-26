import React, {useState, useEffect} from 'react';
import './Switch.css';


function Switch() {

  const [isOn, setIsOn] = useState(false);

  // Control state of the switch; if switched (i.e. isOn == true), should turn red;
  const switched = () => {
    // This first way is supposed to be super-current best practice,
    // but can't make it work for some reason;
    // setIsOn(!isOn.prevState);
    setIsOn(!isOn);
  };

  return (
    <div>
      <input
        checked={isOn}
        onChange={e => switched()}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
    </div>
  );
};

export default Switch;

/*
//New

import React, {useState, useEffect, Component} from 'react';
import './Switch.css';

class Switch extends Component {
  constructor(props){
    super(props);
  }

  state = {
    isOn: false
  }

  switched = () => {
    this.setState({isOn: !this.state.isOn})
  }

  render(){

    return(
      <div>
        <input
          checked={this.state.isOn}
          onChange={ () => this.switched()}
          className="react-switch-checkbox"
          //id={`react-switch-new`}
          type="radio"
        />
        <label
          className="react-switch-label"
          htmlFor={`react-switch-new`}
        >
          <span className={`react-switch-button`} />
        </label>
      </div>
    )
  }
}

export default Switch;*/