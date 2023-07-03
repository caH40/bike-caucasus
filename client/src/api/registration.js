import { myAxios } from './axios';

export async function postRegistration(dataForm) {
	try {
		const response = await myAxios({
			method: 'post',
			url: '/api/auth/registration',
			data: { username: dataForm.username, email: dataForm.email, password: dataForm.password },
		});

		return response;
	} catch (error) {
		console.log(error);
		return error.response || error;
	}
}
