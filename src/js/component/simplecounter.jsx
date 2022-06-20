import React from "react";
import PropTypes from "prop-types";

//create your first component
const SimpleCounter = (props) => {
	return (
		<div className="container">
				<div className="clock">
					<i className="far fa-clock" />
				</div>
				<div className="six">{props.six}</div>
				<div className="five">{props.five}</div>
				<div className="four">{props.four}</div>
				<div className="three">{props.three}</div>
				<div className="two">{props.two}</div>
				<div className="one">{props.one}</div>
			</div>
		
	);
};

SimpleCounter.propTypes = {
	one: PropTypes.number,
	two: PropTypes.number,
	three: PropTypes.number,
	four: PropTypes.number,
	six: PropTypes.number,
};

export default SimpleCounter;
