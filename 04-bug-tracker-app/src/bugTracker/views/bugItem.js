import React, { PureComponent } from 'react';

class BugItem extends PureComponent{

	onBugNameClick = () => {
		this.props.toggle(this.props.bug);
	}

	render = () => {
		let { bug } = this.props;
		let bugStyle = 'bugname ' + (bug.isClosed ? 'closed' : '');
		return(
			<li>
				<span className={bugStyle} onClick={this.onBugNameClick}>
					{ bug.name }
				</span>
			</li>
		)
	}
}

export default BugItem;