import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

var spinnerActionCreators = {
	increment(delta){
		let action = { type : 'INCREMENT', payload : delta };
		return action;
	},
	decrement(delta){
		let action = { type : 'DECREMENT', payload : delta };
		return action;
	},
	doubleIncrement(){
		let action = { type : 'DOUBLE_INCREMENT'};
		return action;
	},
	doubleDecrement(){
		let action = { type : 'DOUBLE_DECREMENT'};
		return action;
	},
};

class Spinner extends Component{
	state = { delta : 1 };
	render(){
		let { spinnerValue, increment, decrement, doubleIncrement, doubleDecrement } = this.props;
		return (
			<div>
				<label>Delta :</label>
				<input type="number" onChange={evt => this.setState({ delta : parseInt(evt.target.value) }) }/>
				<br/>
				<input type="button" value="Double Decrement" onClick={() => doubleDecrement() } />
				<input type="button" value="Decrement" onClick={() => decrement(this.state.delta)} />
				<span> [ {spinnerValue} ] </span>
				<input type="button" value="Increment" onClick={() => increment(this.state.delta)} />
				<input type="button" value="Double Increment" onClick={() => doubleIncrement() } />
			</div>
		);
	}
}

function mapStateToSpinnerProps(storeState){
	let value = storeState.spinnerData;
	return { spinnerValue : value };
}

function mapDispatchToSpinnerProps(dispatch){
	let spinnerActionDispatchers = bindActionCreators(spinnerActionCreators, dispatch);
	return spinnerActionDispatchers;
}

//Container Component (or) Smart Component
export default connect(
		mapStateToSpinnerProps,
		mapDispatchToSpinnerProps
	)(Spinner);