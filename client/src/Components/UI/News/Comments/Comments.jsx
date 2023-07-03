import React from 'react';

import classes from './Comments.module.css';

const Comments = ({ commentsQuantity, getClick }) => {
  return (
    <div className={classes.box} onClick={getClick}>
      <span className={classes.image}>
        <svg
          width="28"
          height="25"
          viewBox="0 0 28 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.1795 0H6.82051C5.0123 0.00214559 3.2788 0.679136 2.0002 1.88249C0.721599 3.08585 0.00227974 4.71734 0 6.41915V23.9873C0.000187223 24.1877 0.063449 24.3835 0.181796 24.55C0.300142 24.7165 0.468265 24.8463 0.664931 24.9229C0.861596 24.9995 1.07798 25.0196 1.28676 24.9806C1.49554 24.9415 1.68734 24.8452 1.83795 24.7036L5.3042 21.4413C5.47089 21.2841 5.66899 21.1594 5.88708 21.0745C6.10518 20.9896 6.33896 20.9462 6.57497 20.9467H21.1795C22.9877 20.9445 24.7212 20.2676 25.9998 19.0642C27.2784 17.8608 27.9977 16.2294 28 14.5275V6.41915C27.9977 4.71734 27.2784 3.08585 25.9998 1.88249C24.7212 0.679136 22.9877 0.00214559 21.1795 0ZM25.8462 14.5275C25.8446 15.6919 25.3525 16.8083 24.4776 17.6316C23.6028 18.455 22.4167 18.9182 21.1795 18.9196H6.57497C6.05602 18.9181 5.54193 19.0136 5.06251 19.2006C4.58309 19.3876 4.14789 19.6623 3.78215 20.0088L2.15385 21.54V6.41915C2.15537 5.25474 2.64752 4.13844 3.52236 3.31508C4.3972 2.49172 5.5833 2.02853 6.82051 2.0271H21.1795C22.4167 2.02853 23.6028 2.49172 24.4776 3.31508C25.3525 4.13844 25.8446 5.25474 25.8462 6.41915V14.5275Z"
            fill="#959FA8"
          />
          <path
            d="M25.8462 14.5275C25.8446 15.6919 25.3525 16.8083 24.4776 17.6316C23.6028 18.455 22.4167 18.9182 21.1795 18.9196H6.57497C6.05602 18.9181 5.54193 19.0136 5.06251 19.2006C4.58309 19.3876 4.14789 19.6623 3.78215 20.0088L2.15385 21.54V6.41915C2.15537 5.25474 2.64752 4.13844 3.52236 3.31508C4.3972 2.49172 5.5833 2.02853 6.82051 2.0271H21.1795C22.4167 2.02853 23.6028 2.49172 24.4776 3.31508C25.3525 4.13844 25.8446 5.25474 25.8462 6.41915V14.5275Z"
            fill="none"
          />
        </svg>
      </span>
      <span>{commentsQuantity}</span>
    </div>
  );
};

export default Comments;
