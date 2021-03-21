import axios from 'axios';
const API = process.env.REACT_APP_API_URL;

const options = {
	'content-type':'application/json'
};

export const getUsers = (page=0) => {

	const data=null;

	axios.
		post(`${API}/users?page=${page}`, data, {
			headers: options
		})
		.then(res => {
			console.log(res);
		})

}
