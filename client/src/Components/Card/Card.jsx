import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Card.module.css';

const Card = ({ trail }) => {
  const styleMtb = trail.bikeType === 'Горный' ? classes.mtb : '';
  return (
    <Link to={trail._id} className={[classes.card, styleMtb].join(' ')}>
      <img className={classes.img} src={trail.cardPhoto} alt="background-trail" />
      <h2 className={classes.title}>{trail.nameRoute}</h2>
      <h3 className={`${classes.title} ${classes.title_sub}`}>{trail.state}</h3>
      <div className={classes.text}>
        <div className={classes.description}>
          <img className={classes.ico} src="/assets/images/icons/start-flag.svg" alt="start" />
          <span className={classes.names}>Старт:</span>
          <span className={classes.names_data}>{trail.start}</span>
        </div>
        <div className={classes.description}>
          <img className={classes.ico} src="/assets/images/icons/turn-arrow.svg" alt="turn" />
          <span className={classes.names}>Разворот:</span>
          <span className={classes.names_data}>{trail.turn}</span>
        </div>
        <div className={classes.description}>
          <img className={classes.ico} src="/assets/images/icons/route-line.svg" alt="route" />
          <span className={classes.names}>Дистанция:</span>
          <span className={classes.names_data}>{trail.distance}км</span>
        </div>
        <div className={classes.description}>
          <img className={classes.ico} src="/assets/images/icons/mountain.svg" alt="ascent" />
          <span className={classes.names}>Набор высоты:</span>
          <span className={classes.names_data}>{trail.ascent}м</span>
        </div>
        <div className={classes.description}>
          <img
            className={classes.ico}
            src="/assets/images/icons/finish-flag.svg"
            alt="finish"
          />
          <span className={classes.names}>Финиш:</span>
          <span className={classes.names_data}>{trail.finish}</span>
        </div>
        <div className={classes.description}>
          <img className={classes.ico} src="/assets/images/icons/bike.svg" alt="bike" />
          <span className={classes.names}>Тип:</span>
          <span className={classes.names_data}>{trail.bikeType}</span>
        </div>
      </div>

      <div className={`${classes.card__frame_kudos} ${classes.frame_kudos}`}>
        <div className={classes.frame_kudos__kudos}>
          <img
            className={classes.frame_kudus__kudos_img}
            src="/assets/images/icons/kudos.svg"
            alt=""
          />
        </div>
        <div className={classes.frame_kudos__number}>
          <span className={classes.frame_kudos__number_text}>{trail.likes}</span>
        </div>
        <div className={classes.frame_kudos__eye}>
          <img
            className={classes.frame_kudus__eye_img}
            src="/assets/images/icons/eye.svg"
            alt=""
          />
        </div>
        <div className={classes.frame_kudos__number}>
          <span className={classes.frame_kudos__number_text}>{trail.kudoses.views}</span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
