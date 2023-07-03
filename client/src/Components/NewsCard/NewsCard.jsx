import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getNews } from '../../api/news';

import NewsInteractive from '../NewsInteractive/NewsInteractive';
import classes from './NewsCard.module.css';

const newsOnPage = 2;
const server = process.env.REACT_APP_SERVER_EXPRESS;

const News = () => {
	const [news, setNews] = useState([]);
	const [page, setPage] = useState(1);
	const [quantityPages, setQuantityPages] = useState(1);
	const [fetching, setFetching] = useState(true);

	useEffect(() => {
		if (fetching) {
			getNews(page, newsOnPage)
				.then(data => {
					setQuantityPages(data.quantityPages);
					setNews(prev => [...prev, ...data.news]);
					setPage(prev => prev + 1);
				})
				.finally(() => setFetching(false));
		}
	}, [page, fetching]);

	const handlerScroll = useCallback(
		e => {
			if (
				e.target.documentElement.scrollHeight -
					e.target.documentElement.scrollTop -
					window.innerHeight <=
					200 &&
				quantityPages >= page
			) {
				setFetching(true);
			}
		},
		[quantityPages, page]
	);

	useEffect(() => {
		document.addEventListener('scroll', handlerScroll);
		return () => document.removeEventListener('scroll', handlerScroll);
	}, [handlerScroll]);
	return (
		<>
			{news.length ? (
				<div className={classes.wrapper}>
					<div className={classes.content}>
						{news.map(newsOne => (
							<div className={classes.block} key={newsOne._id}>
								<div className={classes.image}>
									<img className={classes.img} src={`${server}/${newsOne?.image}`} alt="news" />
								</div>

								<div className={classes.box__news}>
									<div className={classes.box__text}>
										<div className={classes.truncate}>
											<h2 className={classes.title}>{newsOne.newsTitle}</h2>
											<p
												className={classes.text}
												dangerouslySetInnerHTML={{ __html: newsOne.newsText }}
											></p>
										</div>
										<Link to={`/news/${newsOne._id}`} className={classes.link}>
											читать далее...
										</Link>
									</div>

									<NewsInteractive newsOne={newsOne} isVisibleDate={true} />
								</div>
							</div>
						))}
					</div>
				</div>
			) : (
				'Loading...'
			)}
		</>
	);
};

export default News;
