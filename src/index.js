// import the React and RactDom libraries
import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

// Create a react component
const App = () => {
    return (
    <div>
        <div className="ui container comments">
			<CommentDetail />
			<CommentDetail />
			<CommentDetail />
		</div>
    </div>
    )
}

// Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)