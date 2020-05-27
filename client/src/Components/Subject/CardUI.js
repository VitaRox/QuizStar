import React from 'react';

const Card = props => {
  return(
    <div className="card text-center">
      <div className="overfow">
        <img src={props.imgsrc} alt='chem pic'className="card-img-top"/>
      </div>
      <div className="card-body text-dark">
      <h4 className="card-title">{props.title}</h4>
      <p className="card-text text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
      </p>
      <a href="#" className="btn btn-outline-success">Go</a>
    </div>
  </div>
  );
}
export default Card;
