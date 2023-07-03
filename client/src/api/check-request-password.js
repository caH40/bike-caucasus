import axios from 'axios';

const server = process.env.REACT_APP_SERVER_EXPRESS;

export async function checkRequestPassword(token) {
	try {
		const response = await axios({
			method: 'post',
			url: `${server}/api/auth/check-request-password`,
			data: { token },
		});
		return response;
	} catch (error) {
		console.log(error);
	}
}
