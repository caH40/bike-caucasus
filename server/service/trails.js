import fs from 'fs';
import path from 'path';

import { Card } from '../Model/Card.js';
import { Comment } from '../Model/Comment.js';
import { Kudos } from '../Model/Kudos.js';
import { Photos } from '../Model/Photo.js';
import { countViewsTrail } from './views.js';

const __dirname = path.resolve();

export async function getTrailsService(filter, sort, cardsOnPage, page = 1) {
	try {
		// const start = Date.now();
		const cardsDB = await Card.find({ $and: [{ state: filter, bikeType: filter }] }).populate(
			'kudoses'
		);
		// const finish = Date.now();
		// console.log((finish - start) / 1000);
		const quantityPages = Math.ceil(cardsDB.length / cardsOnPage);

		const cardsSorted = sortCards(sort, cardsDB);

		const cardsCurrentPage = cardsSorted.slice(
			cardsOnPage * page - cardsOnPage,
			cardsOnPage * page
		);

		const card = cardsCurrentPage.map(c => c.toObject());

		for (let i = 0; i < card.length; i++) {
			let likes = card[i].kudoses.usersIdLike.length - card[i].kudoses.usersIdDisLike.length;
			card[i].likes = likes;
		}

		return { message: 'Карточки маршрутов получены', data: { cards: card, quantityPages } };
	} catch (error) {
		console.log(error);
		throw 'Непредвиденная ошибка на сервере. getTrailsService()';
	}
}

export async function getTrailService(trailId, type, userId) {
	try {
		let cardDB = {};
		if (type === 'edit') {
			cardDB = await Card.findOne({ _id: trailId }).populate('kudoses').populate('postedBy');
		} else {
			cardDB = await Card.findOne({ _id: trailId }, { cardPhoto: false })
				.populate('kudoses')
				.populate('postedBy');
			await countViewsTrail(cardDB.kudoses._id, userId).catch(error => console.log(error));
		}

		if (!cardDB) throw `Маршрут не найден ${trailId}`;
		const photosDB = await Photos.findOne({ _id: cardDB.descPhotos });

		const descriptionAreaArr = cardDB.descriptionArea.split('\n');
		const card = cardDB.toObject();

		card.descPhoto = photosDB.descPhoto;
		card.authorPhoto = photosDB.authorPhoto;
		card.descriptionArea = descriptionAreaArr;

		return { message: 'Описание маршрута', data: card };
	} catch (error) {
		throw error;
	}
}

const sortCards = (sortRule, cards) => {
	if (sortRule.sortDirection === 'up') {
		return cards.sort((a, b) => a[sortRule.sortField] - b[sortRule.sortField]);
	} else {
		return cards.sort((a, b) => b[sortRule.sortField] - a[sortRule.sortField]);
	}
};

export async function postTrailService(form, userId) {
	try {
		const {
			nameRoute,
			state,
			bikeType,
			start,
			turn,
			finish,
			distance,
			ascent,
			descriptionArea,
			cardPhoto,
			fileTrekName,
			urlVideo,
			urlTrekGConnect,
			descPhotos,
		} = form;

		const descPhotoClear = descPhotos.map(photo => photo.source);
		const photosDB = await Photos.create({ descPhoto: descPhotoClear });

		const kudosDB = await Kudos.create({});

		const cardDB = await Card.create({
			nameRoute,
			state,
			bikeType,
			start,
			turn,
			finish,
			distance,
			ascent,
			descriptionArea,
			cardPhoto: cardPhoto.source,
			fileTrekName,
			urlVideo,
			urlTrekGConnect,
			postedBy: userId,
			descPhotos: photosDB._id,
			kudoses: kudosDB._id,
			date: Date.now(),
		});

		if (!cardDB) throw { message: 'Ошибка при сохранении данных нового маршрута' };
		return { message: 'Новый маршрут сохранён!', trailId: cardDB._id };
	} catch (error) {
		console.log(error);
		throw 'Непредвиденная ошибка на сервере. postTrailService()';
	}
}

export async function postTrailEditService(form, userId) {
	try {
		const {
			_id,
			descPhoto: descPhotosId,
			nameRoute,
			state,
			bikeType,
			start,
			turn,
			finish,
			distance,
			ascent,
			descriptionArea,
			cardPhoto,
			fileTrekName,
			urlVideo,
			urlTrekGConnect,
			descPhotos,
		} = form;

		const descriptionAreaString =
			typeof descriptionArea === 'object' ? descriptionArea.join('\n') : descriptionArea;

		const descPhotoClear = descPhotos.map(photo => photo.source);
		const photosDB = await Photos.findByIdAndUpdate(descPhotosId, {
			$set: { descPhoto: descPhotoClear },
		});

		const cardDB = await Card.findByIdAndUpdate(_id, {
			$set: {
				nameRoute,
				state,
				bikeType,
				start,
				turn,
				finish,
				distance,
				ascent,
				descriptionArea: descriptionAreaString,
				cardPhoto: cardPhoto.source,
				fileTrekName,
				urlVideo,
				urlTrekGConnect,
				postedBy: userId,
				descPhotos: photosDB._id,
				dateEdit: Date.now(),
			},
		});

		if (!cardDB) throw { message: 'Ошибка при сохранении данных отредактированного маршрута' };

		if (fileTrekName !== cardDB.fileTrekName && fileTrekName) {
			fs.unlink(path.resolve(__dirname, 'treks', cardDB.fileTrekName), error => {
				if (error) {
					console.log(error);
				} else {
					console.log(`Старый трек успешно удалён ${cardDB.fileTrekName}`);
				}
			});
		}

		return { message: 'Отредактированный маршрут сохранён!', trailId: cardDB._id };
	} catch (error) {
		console.log(error);
		throw 'Непредвиденная ошибка на сервере. postTrailEditService()';
	}
}

export async function getTrailsEditService() {
	try {
		const cardsDB = await Card.find().populate({ path: 'postedBy', select: 'username' });

		if (!cardsDB.length) throw { message: 'Ошибка при получении маршрутов' };
		cardsDB.reverse();

		return { message: 'Все маршруты получены!', data: cardsDB };
	} catch (error) {
		console.log(error);
		throw 'Непредвиденная ошибка на сервере. getTrailsEditService()';
	}
}

export async function deleteTrailService(trailId) {
	try {
		const cardDB = await Card.findByIdAndDelete(trailId);
		if (!cardDB) throw { message: 'Ошибка при получении маршрутов' };
		const photosDB = await Photos.findByIdAndDelete(cardDB.descPhotos);
		const kudosDB = await Kudos.findByIdAndDelete(cardDB.kudoses);
		const commentsDB = await Comment.deleteMany({ cardId: cardDB._id });

		return { message: 'Маршрут удален!' };
	} catch (error) {
		console.log(error);
		throw 'Непредвиденная ошибка на сервере. deleteTrailService()';
	}
}
