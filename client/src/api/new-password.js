import axios from 'axios';

const server = process.env.REACT_APP_SERVER_EXPRESS;

export async function postNewPassword(userId, newPassword) {
	try {
		const response = await axios({
			method: 'post',
			url: `${server}/api/auth/new-password`,
			data: { userId, newPassword },
		});
		return response;
	} catch (error) {
		console.log(error);
	}
}
