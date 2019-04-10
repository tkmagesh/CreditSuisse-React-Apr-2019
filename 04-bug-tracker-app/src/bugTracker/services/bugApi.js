import axios from 'axios';

const serviceEndPoint = 'http://localhost:3030/bugs';

function getAll(){
	return axios
		.get(serviceEndPoint)
		.then(response => response.data);
}

function get(id){
	return axios
		.get(`${serviceEndPoint}/${id}`)
		.then(response => response.data);
}

function save(bugData){
	if (bugData.id === 0){
		return axios
			.post(serviceEndPoint, bugData)
			.then(response => response.data);
	} else {
		return axios
			.put(`${serviceEndPoint}/${bugData.id}`, bugData)
			.then(response => response.data);
	}
}

function remove(bugData){
	return axios
		.delete(`${serviceEndPoint}/${bugData.id}`)
		.then(response => response.data);
}

export default { getAll, get, save, remove };