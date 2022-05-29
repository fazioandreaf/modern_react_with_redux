// import the React and RactDom libraries
import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
	constructor(props) {
		super(props);

		// THIS IS THE ONLY TIME WE DO DIREC ASSIGNMET TO THIS.STATE
		this.state = {
			lat: null,
			long: null,
			errorMessage: null
		};



		window.navigator.geolocation.getCurrentPosition(
			position => {
				// we called sestate!!
				this.setState({lat: position.coords.latitude});
			},
			err => {this.setState({errorMessage: err.message})}
		);
	}


	// React says we have to define render!!
    render() {
		if (!this.state.errorMessage && this.state.lat ) {
			return (<div> Latitude: {this.state.lat}</div>);
		} else if (this.state.errorMessage && !this.state.lat) {
			return (<div> Error: {this.state.errorMessage}</div>);
		} else {
			return (<div> Loading</div>);
		}

    }
}

// Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)