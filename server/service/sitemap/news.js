import { News } from '../../Model/News.js';

export async function getUrlsNews() {
	try {
		const newsDB = await News.find({}, { _id: true });
		const urlsNews = newsDB.map(newsOne => {
			return `
    <url>
      <loc>https://bike-caucasus.ru/news/${newsOne._id}</loc>
      <priority>0.4</priority>
      <changefreq>always</changefreq>
    </url>`;
		});

		return urlsNews.join('');
	} catch (error) {
		console.log(error);
	}
}
