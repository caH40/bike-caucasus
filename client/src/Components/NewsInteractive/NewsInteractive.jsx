import React, { useEffect, useState } from 'react';

import classes from './NewsInteractive.module.css';
import Comments from '../UI/News/Comments/Comments';
import Dislike from '../UI/News/Dislike/Dislike';
import Like from '../UI/News/Like/Like';
import Share from '../UI/News/Share/Share';
import { useDispatch, useSelector } from 'react-redux';
import { getAlert } from '../../redux/features/alertMessageSlice';
import { formatDate } from '../../utils/date';
import { getNewsInteractive, postNewsInteractive } from '../../api/news';
import { useNavigate } from 'react-router-dom';

const NewsInteractive = ({ newsOne, isVisibleDate, trigger }) => {
  const [interactive, setInteractive] = useState({
    comments: {
      quantity: 0,
    },
    likes: {
      quantity: 0,
      userLiked: false,
      userDisliked: false,
    },
  });

  const authUser = useSelector((state) => state.checkAuth.value.user.id);
  const navigate = useNavigate();

  useEffect(() => {
    getNewsInteractive(newsOne._id).then((data) => setInteractive(data.data.interactive));
  }, [newsOne, trigger]);

  const dispatch = useDispatch();

  const getLikes = (target) => {
    if (!authUser) {
      return dispatch(
        getAlert({ message: 'Необходима авторизация!', type: 'warning', isOpened: true })
      );
    }
    postNewsInteractive(newsOne._id, target).then((data) => {
      setInteractive((prev) => ({ ...prev, ...data.data.interactive }));
    });
  };

  return (
    <div className={classes.block}>
      <div className={classes.box}>
        <Like
          newsId={newsOne._id}
          likeQuantity={interactive.likes.quantity}
          liked={interactive.likes.userLiked}
          getLikes={getLikes}
        />
        <Comments
          commentsQuantity={interactive.comments.quantity}
          getClick={() => navigate(`/news/${newsOne._id}`)}
        />
        <Share newsId={newsOne._id} />
        <Dislike getLikes={getLikes} disliked={interactive.likes.userDisliked} />
      </div>
      {isVisibleDate ? <div className="date">{formatDate(newsOne.date)}</div> : undefined}
    </div>
  );
};

export default NewsInteractive;
