export function dateToNumber(date) {
	try {
		if (!/\d\d\.\d\d\.\d{4}/.test(date)) return date;
		const dateArr = date.split('.');
		return new Date(dateArr[2], dateArr[1] - 1, dateArr[0]).getTime();
	} catch (error) {
		console.log(error);
	}
}
export function datePostedComment(date) {
	const formatter = Intl.DateTimeFormat('ru', {
		day: '2-digit',
		month: 'short',
		year: '2-digit',
		hour: '2-digit',
		minute: '2-digit',
	});
	return formatter.format(date);
}

export function formatDate(date, year) {
	if (!date) return '';
	const formatter = Intl.DateTimeFormat('ru', {
		day: 'numeric',
		month: 'numeric',
		year: year ?? 'numeric',
	});
	return formatter.format(date);
}
