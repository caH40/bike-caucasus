import { dateToNumber } from './date';

export function mySort(data, field, direction) {
	if (direction === 'up') {
		return [...data].sort((a, b) => {
			const x = dateToNumber(a[field]);
			const y = dateToNumber(b[field]);
			if (x > y) return -1;
			if (x < y) return 1;
			return 0;
		});
	}
	if (direction === 'down') {
		return [...data].sort((a, b) => {
			const x = dateToNumber(a[field]);
			const y = dateToNumber(b[field]);
			if (x < y) return -1;
			if (x > y) return 1;
			return 0;
		});
	}
}
