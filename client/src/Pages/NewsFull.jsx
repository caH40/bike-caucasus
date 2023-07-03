import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getNewsOne } from '../api/news';
import HNewsFull from '../Components/Helmets/HNewsFull';
import NewsInteractive from '../Components/NewsInteractive/NewsInteractive';
import CommentBlock from '../Components/UI/CommentBlock/CommentBlock';

import classes from './PagesCss/NewsFull.module.css';

const server = process.env.REACT_APP_SERVER_EXPRESS;

const NewsFull = () => {
	const [news, setNews] = useState({});
	const [trigger, setTrigger] = useState(false);
	const { newsId } = useParams();

	useEffect(() => {
		getNewsOne(newsId).then(data => setNews(data));
	}, [newsId]);
	return (
		<>
			{news?._id ? (
				<div className={classes.container}>
					<HNewsFull news={news} />
					<h1 className={classes.title}>{news.newsTitle}</h1>
					<div className={classes.date}>{new Date(news.date).toLocaleDateString()}</div>
					<img className={classes.img} src={`${server}/${news?.image}`} alt={news.newsTitle} />
					<div className={classes.text} dangerouslySetInnerHTML={{ __html: news.newsText }}></div>
					<div className={classes.box__interactive}>
						<NewsInteractive newsOne={news} isVisibleDate={false} trigger={trigger} />
					</div>
					<CommentBlock newsId={newsId} trigger={trigger} setTrigger={setTrigger} />
				</div>
			) : (
				'Loading...'
			)}
		</>
	);
};

export default NewsFull;
