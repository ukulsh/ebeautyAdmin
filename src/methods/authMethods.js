import axios from 'axios';

const API = process.env.REACT_APP_API
const options = {
	'content-type': 'application/json'
};

export async function login(data, success, failure) {

	data = {...data, notificationId: '45'};

	axios
		.post(`${API}accounts/login`, data, {
			headers: options
		})
		.then(res => {
			console.log(res.data);

			if(res.data.success) {console.log("kjl");
				success(res.data);
			} else {
				console.log('Auth faied');
				failure("Invalid credentials")
			}
		})
		.catch(e => {
			console.log(e);
			failure("Could not login to your account")
		})
}

export async function authenticateAdmin(data, next) {
    if (typeof window !== 'undefined') {
        await localStorage.setItem('_BID__', JSON.stringify(data));
        next();
    }
}

export async function isAuthenticatedAdmin() {
    if (typeof window !== 'undefined') {

        const _BID__ = await localStorage.getItem('_BID__')
        if (_BID__) {
            return JSON.parse(_BID__);
        }
    }
    return false;
};

export async function deauthenticateAdmin() {
    if (typeof window !== 'undefined') {
        await localStorage.removeItem('_BID__');
    }
};