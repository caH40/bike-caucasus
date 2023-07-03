import { myAxios } from './axios';

export async function confirmEmail(token) {
	try {
		const response = await myAxios({
			method: 'post',
			url: '/api/auth/confirm-email',
			data: { token },
		});
		return response;
	} catch (error) {
		console.log(error);
	}
}
