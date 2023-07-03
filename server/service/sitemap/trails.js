import { Card } from '../../Model/Card.js';

export async function getUrlsTrails() {
	try {
		const cardsDB = await Card.find({}, { _id: true });
		const urlsTrails = cardsDB.map(card => {
			return `
    <url>
      <loc>https://bike-caucasus.ru/trails/${card._id}</loc>
      <priority>0.8</priority>
      <changefreq>always</changefreq>
    </url>`;
		});

		return urlsTrails.join('');
	} catch (error) {
		console.log(error);
	}
}
