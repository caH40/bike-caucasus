import { saveWebcam } from './webcam.js';

export async function downloadImage() {
	try {
		const numberWebcams = [1, 5, 6, 7];
		const minuteInMilliseconds = 60000;
		setInterval(async () => {
			for (let value of numberWebcams) await saveWebcam(value);
		}, minuteInMilliseconds);
	} catch (error) {
		console.log(error);
	}
}
