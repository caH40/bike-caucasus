import download from 'image-downloader';
import path from 'path';

const __dirname = path.resolve();

export async function saveWebcam(numberCam) {
	try {
		let options = {
			url: `https://gw.cmo.sai.msu.ru/webcam${numberCam}.jpg`,
			dest: path.resolve(__dirname, 'images/screenshots/webcams', `webcam${numberCam}.jpg`),
		};

		await download.image(options);
	} catch (error) {
		console.log(error);
	}
}
