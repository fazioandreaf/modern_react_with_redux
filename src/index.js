// import the React and RactDom libraries
import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
	state = { lat: null, errorMessage: ''};

	componentDidMount() {
		console.log('My component did mount')
		window.navigator.geolocation.getCurrentPosition(
			position => {
				// we called sestate!!
				this.setState({lat: position.coords.latitude});
			},
			err => {this.setState({errorMessage: err.message})}
		);
	}

	componentDidUpdate() {
		console.log('My component did update')
	}

	// React says we have to define render!!
    render() {
		if (!this.state.errorMessage && this.state.lat ) {
			return (<SeasonDisplay lat={this.state.lat} />);
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