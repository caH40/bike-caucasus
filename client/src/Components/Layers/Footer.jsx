import React from 'react';
import { Link } from 'react-router-dom';
import { Adaptive } from '../../Hoc/Adaptive';

import classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className="container">
        <div className={classes.column}>
          <Adaptive sizeScreen="sm">
            <img className={classes.logo} src="/assets/images/icons/logo.svg" alt="Logo" />
          </Adaptive>
          <ul className={classes.list}>
            <li className={classes.item}>
              <Link className={classes.link} to="/">
                Главная
              </Link>
            </li>
            <li className={classes.item}>
              <Link className={classes.link} to="/trails">
                Маршруты
              </Link>
            </li>
          </ul>
          <ul className={classes.list}>
            <li className={classes.item}>
              <Link className={classes.link} to="/dzhilsu">
                Джилы-Су
              </Link>
            </li>
            <li className={classes.item}>
              <Link className={classes.link} to="/gallery">
                Галерея
              </Link>
            </li>
          </ul>
          <ul className={classes.list}>
            <li className={classes.item}>Социальные сети:</li>
            <li className={classes.item}>
              <div className={classes.social}>
                <a className={classes.social__link} href="https://t.me/velokmv">
                  <img
                    className={classes.social__img}
                    src="/assets/images/icons/telegram.svg"
                    alt="telegram"
                  />
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div className={classes.copyright}>Copyright © 2022 Bike-Caucasus</div>
      </div>
    </footer>
  );
};

export default Footer;
