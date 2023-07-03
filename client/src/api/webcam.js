import axios from 'axios';
const server = process.env.REACT_APP_SERVER_EXPRESS;

export async function getWebcam(url, numberCam) {
	try {
		const response = await axios.get(`${server}${url}/${numberCam}`, { responseType: 'blob' });
		return response.data;
	} catch (error) {
		console.log(error);
	}
}
