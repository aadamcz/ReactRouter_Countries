import React from 'react';
import style from '../country.css';

const CountryFlag = (props) => (
	<div className="country-logo-wrapper style">
		<img className="country-logo" src={props.country.imageUrl} alt="country logo" />
	</div>
);

export default CountryFlag;