// import the React and RactDom libraries
import React from 'react';
import ReactDOM from 'react-dom';
import './style/App.css'
import ApprovalCard from './ApprovalCard.js';
import CommentDetail from './CommentDetail';

// Create a react component
const App = () => {
    return (
    <div>
        <div className="ui container comments">
            <ApprovalCard>
			    <CommentDetail author="Sam" timeAgo="yesterday" content="Nice post!" />
            </ApprovalCard>
            <ApprovalCard>
			    <CommentDetail author="Jane" timeAgo="1 month ago" content="Nice post!" />
            </ApprovalCard>
            <ApprovalCard>
			    <CommentDetail author="Oscar" timeAgo="5 days ago" content="Nice post!" />
            </ApprovalCard>
		</div>
    </div>
    )
}

// Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)