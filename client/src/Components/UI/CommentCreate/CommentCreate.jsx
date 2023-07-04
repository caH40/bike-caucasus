import React, { useEffect, useRef, useState } from 'react';
import { postCommentNews } from '../../../api/comment';
import autosize from 'autosize';

import classes from './CommentCreate.module.css';

const CommentCreate = ({ authUser, setTrigger, newsId }) => {
  const [comment, setComment] = useState('');
  const [popupSend, setPopupSend] = useState(false);
  const textAreaRef = useRef();

  useEffect(() => {
    autosize(textAreaRef.current);
  }, []);

  const sendComment = () => {
    postCommentNews(comment, newsId).then((_) => setTrigger((prev) => !prev));
    setComment('');
    setPopupSend(false);
  };

  const listenKeys = (event) => {
    if (!(event.ctrlKey && event.keyCode === 13)) return;
    sendComment();
  };

  return (
    <div className={classes.create}>
      <div className={classes.box__avatar}>
        <img
          className={classes.avatar}
          src={authUser.user.photoProfile || '/assets/images/avatar.svg'}
          alt="avatar"
        />
      </div>
      <textarea
        ref={textAreaRef}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        onKeyDown={listenKeys}
        className={classes.textarea}
        placeholder="Комментарий"
      />
      {comment ? (
        <div
          onClick={sendComment}
          className={classes.box__send}
          onMouseEnter={() => setPopupSend(true)}
          onMouseLeave={() => setPopupSend(false)}
        >
          <svg
            className={classes.send}
            width="28"
            height="21"
            viewBox="0 0 28 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 2L25 10.5427L2 19L5.5 10.5427L2 2Z"
              fill="#FF8C06"
              stroke="#FF8C06"
              strokeWidth="2"
            />
          </svg>
        </div>
      ) : undefined}
      {popupSend ? (
        <div className={classes.popup__menu}>
          <div className={classes.popup__button}>Отправить (Ctrl+Enter)</div>
        </div>
      ) : undefined}
    </div>
  );
};

export default CommentCreate;
