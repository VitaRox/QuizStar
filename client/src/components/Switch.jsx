import React, {useState, useEffect} from 'react';
import './Switch.css';


function Switch() {

  const [isOn, setIsOn] = useState(false);

  // Control state of the switch; if switched (i.e. isOn == true), should turn red;
  const switched = () => {
    setIsOn(!isOn.prevState);
  };

  return (
    <>
      <input
        checked={isOn}
        onChange={switched}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        style= () => {
          if (isOn) {
            backgroundColor="grey"
          }else{
            backgroundColor="red"
          }
        }
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
    </>
  );
};

export default Switch;
