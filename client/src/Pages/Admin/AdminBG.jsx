import React from 'react';

import classes from '../PagesCss/AdminBG.module.css';

const AdminBG = () => {
  return (
    <section className={classes.wrapper}>
      <img className={classes.img} src="assets/images/admin-bg-small.png" alt="bg" />
    </section>
  );
};

export default AdminBG;
