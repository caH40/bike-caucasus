import { Event } from '../Model/Event.js';
import { Result } from '../Model/Result.js';
import { convertTime, secondesToTime } from './utils/date-convert.js';
import { gapValue } from './utils/gap.js';

export async function getResultsService(eventId) {
	try {
		const resultsDB = await Result.find({ eventId });
		const eventDB = await Event.findOne({ _id: eventId });

		const results = resultsDB.map(result => {
			result = result.toObject();
			result.time = convertTime(result.timeTotal);
			result.eventName = eventDB.eventName;
			return result;
		});
		gapValue(results);
		results.forEach(result => {
			result.timeTotal = secondesToTime(result.time);
			result.gap = secondesToTime(result.gap);
			result.gapPrev = secondesToTime(result.gapPrev);
		});

		return { message: 'Результаты заезда (соревнования)', data: results };
	} catch (error) {
		console.log(error);
		throw 'Непредвиденная ошибка на сервере. getTrailsService()';
	}
}
export async function getResultService(resultId) {
	try {
		const resultDB = await Result.findOne({ _id: resultId });
		return { message: 'Результаты заезда спортсмена', result: resultDB };
	} catch (error) {
		console.log(error);
		throw 'Непредвиденная ошибка на сервере. getTrailsService()';
	}
}
export async function postResultService(resultForm) {
	try {
		const _id = resultForm._id;
		delete resultForm._id;
		await Result.findOneAndUpdate({ _id }, { $set: resultForm });
		return { message: 'Сохранены изменения в результате заезда' };
	} catch (error) {
		console.log(error);
		throw 'Непредвиденная ошибка на сервере. postResultService()';
	}
}

export async function postAddResultService(resultForm) {
	try {
		await Result.create(resultForm);
		return { message: 'Добавлен результат соревнования!' };
	} catch (error) {
		console.log(error);
		throw 'Непредвиденная ошибка на сервере. postAddResultService()';
	}
}

export async function deleteResultService(resultId) {
	try {
		await Result.findOneAndDelete({ _id: resultId });
		return { message: 'Удален результат соревнования!' };
	} catch (error) {
		console.log(error);
		throw 'Непредвиденная ошибка на сервере. postAddResultService()';
	}
}

export async function getResultsAthleteService(athlete, userId) {
	try {
		if (!athlete && !userId) return;
		const filter = athlete ? { athlete } : { userId };

		const resultsDB = await Result.find(filter);

		const results = resultsDB.map(result => result.toObject());

		// const time = new Date().getTime();
		for (let i = 0; i < results.length; i++) {
			const { eventName, eventDate, segmentStrava } = await Event.findOne({
				_id: results[i].eventId,
			});
			results[i].eventName = eventName;
			results[i].eventDate = eventDate;
			results[i].segmentStrava = segmentStrava;
		}
		// console.log(new Date().getTime() - time);
		return { message: `Результаты заездов спортсмена ${athlete}`, data: results };
	} catch (error) {
		console.log(error);
		throw 'Непредвиденная ошибка на сервере. getTrailsService()';
	}
}
