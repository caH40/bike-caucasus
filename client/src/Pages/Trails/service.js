export const sortStart = () =>
	localStorage.getItem('sortField')
		? {
				sortField: localStorage.getItem('sortField'),
				sortDirection: localStorage.getItem('sortDirection'),
		  }
		: {
				sortField: 'distance',
				sortDirection: 'up',
		  };

export const filterStart = () =>
	localStorage.getItem('filterFields')
		? localStorage.getItem('filterFields').split(',')
		: [
				'КавМинВоды',
				'Карачаево-Черкессия',
				'Кабардино-Балкария',
				'Северная Осетия',
				'Адыгея',
				'Шоссейный',
				'Горный',
		  ];
