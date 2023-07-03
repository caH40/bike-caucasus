import React from 'react';
import { Adaptive } from '../../Hoc/Adaptive';
import { formatDate } from '../../utils/date';
import classes from './TrailTotal.module.css';

const server = process.env.REACT_APP_SERVER_EXPRESS;

const TrailTotal = ({ trail }) => {
	const url = trail.urlTrekGConnect.replace('course/', 'course/embed/');
	return (
		<div className={classes.total}>
			<ul className={classes.list}>
				<li className={classes.item}>Сводные данные по маршруту</li>
				<li className={classes.item}>
					Старт:<span>{trail.start}</span>
				</li>
				<li className={classes.item}>
					Разворот:<span>{trail.turn}</span>
				</li>
				<li className={classes.item}>
					Протяженность:<span>{trail.distance}км</span>
				</li>
				<li className={classes.item}>
					Набор высоты:<span>{trail.ascent}м</span>
				</li>

				<li className={classes.item}>
					Финиш:<span>{trail.finish}</span>
				</li>
				<li className={classes.item}>
					Маршрут в Garmin Connect:
					<a
						className={classes.link__gconnect}
						target="_blank"
						href={trail.urlTrekGConnect}
						rel="noreferrer"
					>
						Открыть на сайте
					</a>
				</li>
				<li className={classes.item} id="downloadTrek">
					Трек для велокомпьютера GPX/FIT
					<a
						className={classes.link__gconnect}
						href={`${server}/api/gettrek?id=${trail.fileTrekName}`}
						target="_blank"
						rel="noreferrer"
					>
						Скачать
					</a>
				</li>

				<li className={classes.item}>
					Создан:
					<span>
						{trail.postedBy?.username}, {formatDate(trail.date)}
					</span>
				</li>
			</ul>
			<Adaptive sizeScreen="sm">
				<iframe title={trail.nameRoute} src={url} width="465" height="548"></iframe>
			</Adaptive>
		</div>
	);
};

export default TrailTotal;
