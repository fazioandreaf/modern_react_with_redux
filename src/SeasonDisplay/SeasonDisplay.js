// import the React and RactDom libraries
import React from 'react';
import SeasonDisplayStyle from './SeasonDisplay.css';

const seasonConfig = {
	summer: {
		text: 'Lets hit the beach!',
		iconName: 'sun'
	},
	winter: {
		text: 'Burr, it is chilly!',
		iconName: 'Snowflake'
	}
}


const getSeason = (lat, month) => {
	if (month > 2 && month < 9) {
		return lat > 0 ? 'summer' : 'winter';
	} else {
		return lat < 0 ? 'summer' : 'winter';
	}
}

// Create a react component
const SeasonDisplay = ({lat}) => {
	const season = getSeason(lat, new Date().getMonth());
	const {text, iconName} = seasonConfig[season];


    return (
		<div className={`season-display ${season}`}>
			<i className={`massive ${iconName} icon icon-left`} />
			<h1>{text}</h1>
			<i className={`massive ${iconName} icon icon-right`} />
		</div>
    )
}

export default SeasonDisplay
