// import the React and RactDom libraries
import React from 'react';

// Create a react component
const ApprovalCard = ({children}) => {
    return (
		<div className="ui card">
			<div className='content'>{children}</div>
			<div className="extra content">
				<div className="ui two buttons">
					<div className="ui basic green button">Yes</div>
					<div className="ui basic red button">No</div>
				</div>
			</div>
		</div>
    )
}

export default ApprovalCard
