import { myAxios } from './axios';
const server = process.env.REACT_APP_SERVER_EXPRESS;

export async function postLikeNews(changesLikes) {
	try {
		const response = await myAxios({
			method: 'POST',
			url: `${server}/api/likes`,
			data: { changesLikes },
		});

		return response;
	} catch (error) {
		console.log(error);
	}
}
