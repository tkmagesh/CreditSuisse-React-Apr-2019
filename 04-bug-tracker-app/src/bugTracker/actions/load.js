//import axios from 'axios';

/*function getDataSync(){
	var bugs = [
		{id: 1, name : 'Bug - 1', isClosed : false},
		{id: 2, name : 'Bug - 2', isClosed : true},
		{id: 3, name : 'Bug - 3', isClosed : false},
	];
	return bugs;
}

function getDataAsync(callback){
	setTimeout(function(){
		var bugs = [
			{id: 1, name : 'Bug - 1', isClosed : false},
			{id: 2, name : 'Bug - 2', isClosed : true},
			{id: 3, name : 'Bug - 3', isClosed : false},
		];
		callback(bugs);
	}, 5000);
}*/

/*function getDataAsync(){
	return axios
		.get('http://localhost:3030/bugs')
		.then(response => response.data);
}*/

import bugApi from '../services/bugApi';

export function load(){
	/*return function(dispatch){
		bugApi
			.getAll()
			.then( bugs => {
				let action  = { type : 'INITIALIZE', payload : bugs};
				dispatch(action);	
			});
	};*/

	return async function(dispatch){
		let bugs = await bugApi.getAll();
		let action  = { type : 'INITIALIZE', payload : bugs};
		dispatch(action);	
	}
	
}




