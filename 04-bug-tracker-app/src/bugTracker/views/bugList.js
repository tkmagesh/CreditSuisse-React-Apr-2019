import React, { Component } from 'react';
import BugItem from './bugItem';

class BugList extends Component{

	render(){
		let { bugs, toggle, removeClosed }  = this.props;
		let bugList = bugs.map((bug, index) => (
				<BugItem bug={bug} key={index} toggle={toggle} />
			));
		return(
			<section className="list">
				<ol>
					{bugList}
				</ol>
				<input type="button" value="Remove Closed" onClick={() => removeClosed(bugs)}/>
			</section>
		)
	}
}

export default BugList;