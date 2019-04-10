import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as bugActionCreators from './actions';

import BugStats from './views/bugStats';
import BugSort from './views/bugSort';
import BugEdit from './views/bugEdit';
import BugList from './views/bugList';

class BugTracker extends Component{
	render = () => {
		let { bugs, toggle, removeClosed, addNew } = this.props;
		return(
			<Fragment>
				<BugStats bugs={bugs} />
				<BugSort />
				<BugEdit addNew={addNew} />
				<BugList {...{bugs, removeClosed, toggle}} />
			</Fragment>
		)
	}
}

function mapStateToBugTrackerProps(storeState){
	let bugs = storeState.bugsData;
	return { bugs : bugs };
}

function mapDispatchToBugTrackerProps(dispatch){
	let bugActionDispatchers = bindActionCreators(bugActionCreators, dispatch);	
	return bugActionDispatchers;
}

//Container Component (or) Smart Component
export default connect(
		mapStateToBugTrackerProps,
		mapDispatchToBugTrackerProps
	)(BugTracker);
	