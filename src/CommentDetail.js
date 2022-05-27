// import the React and RactDom libraries
import React from 'react';
import faker from 'faker';


// Create a react component
const CommentDetail = ({author, timeAgo, comment}) => {
    return (
		<div className="comment">
			<a href="/" className="avatar">
				<img src={faker.image.avatar()} alt="avatar" />
			</a>
			<div className="content">
				<a href="/" className="author">
					{author}
				</a>
				<div className="metadata">
					<span className="date">{timeAgo}</span>
				</div>
				<div className="text">{comment}</div>
			</div>
		</div>
    )
}

export default CommentDetail
