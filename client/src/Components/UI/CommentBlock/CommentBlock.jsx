import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getComments, postCommentDelete } from '../../../api/comment';

import classes from './CommentBlock.module.css';
import CommentCreate from '../CommentCreate/CommentCreate';
import { datePostedComment } from '../../../utils/date';

const CommentBlock = ({ newsId, trigger, setTrigger }) => {
	const [comments, setComments] = useState([]);
	const [popupId, setPopupId] = useState('');

	const authUser = useSelector(state => state.checkAuth.value);

	useEffect(() => {
		getComments(newsId).then(data => setComments(data?.data?.comments || []));
	}, [newsId, trigger]);

	const getMenu = newsId => {
		function handlerMenu(e) {
			if (e.target.classList.value.includes('CommentBlock_menu')) return;
			setPopupId('');
			document.removeEventListener('click', handlerMenu);
		}

		setPopupId(newsId);
		document.addEventListener('click', handlerMenu);
	};

	const deleteComment = commentId => {
		postCommentDelete(commentId).then(data => {
			setTrigger(prev => !prev);
		});
	};

	return (
		<div className={classes.wrapper}>
			<CommentCreate authUser={authUser} setTrigger={setTrigger} newsId={newsId} />

			{comments.map(commentOne => {
				const id = commentOne._id;
				const userAvatar = commentOne.postedBy?.photoProfile || '/images/avatar.svg';
				const userName = commentOne.postedBy?.username || 'Гость';
				const isVisiblePopupMenu = id === popupId;
				const isVisibleMenu =
					(commentOne.postedBy?._id === authUser.user.id ||
						['admin', 'moderator'].includes(authUser.user.role)) &&
					authUser.status;

				return (
					<div className={classes.comment} key={id}>
						<div className={classes.box__user}>
							<div className={classes.box__avatar}>
								<img className={classes.avatar} src={userAvatar} alt="avatar" />
							</div>
							<p className={classes.name}>{userName}</p>
							<p className={classes.date}>{datePostedComment(commentOne.date)}</p>
						</div>
						<p className={classes.box__text}>{commentOne.text}</p>
						{isVisibleMenu ? (
							<div className={classes.relative}>
								<div onClick={() => getMenu(id)} className={classes.box__menu}>
									<img className={classes.menu__img} src="/images/icons/3points.svg" alt="menu" />
								</div>
								{isVisiblePopupMenu ? (
									<div className={classes.popup__menu}>
										{/* <div
											className={classes.popup__button}
											style={{ color: '#070707' }}
											onClick={() => editComment(id)}
										>
											Редактировать
										</div> */}
										<div className={classes.popup__button} onClick={() => deleteComment(id)}>
											Удалить
										</div>
									</div>
								) : undefined}
							</div>
						) : undefined}
					</div>
				);
			})}
		</div>
	);
};

export default CommentBlock;
