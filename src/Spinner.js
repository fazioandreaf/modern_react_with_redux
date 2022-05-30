// import the React and RactDom libraries
import React from 'react';

const Spinner = ({message}) => {
    return (
		<div class="ui active dimmer">
		  <div class="ui big text loader">{message}</div>
		</div>
    )
}

Spinner.defaultProps = {
	message: 'Loading...'
}

export default Spinner
