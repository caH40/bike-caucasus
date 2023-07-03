import React from 'react';
import ArrowSvg from './ArrowSvg';

import classes from './ArrowsWebcam.module.css';
const webcams = [1, 5, 6, 7];

const ArrowsWebcam = ({ numberWebcam, setNumberWebcam }) => {
  const chooseNumber = (direction) => {
    if (direction === 'left') {
      if (webcams.indexOf(numberWebcam) === 0) {
        setNumberWebcam(webcams[webcams.length - 1]);
      } else {
        setNumberWebcam((prev) => webcams[webcams.indexOf(prev) - 1]);
      }
    }
    if (direction === 'right') {
      if (webcams.indexOf(numberWebcam) === webcams.length - 1) {
        setNumberWebcam(webcams[0]);
      } else {
        setNumberWebcam((prev) => webcams[webcams.indexOf(prev) + 1]);
      }
    }
  };

  return (
    <>
      <div className={`${classes.arrow} ${classes.left}`} onClick={() => chooseNumber('left')}>
        <ArrowSvg isLeftArrow={true} />
      </div>

      <div
        className={`${classes.arrow} ${classes.right}`}
        onClick={() => chooseNumber('right')}
      >
        <ArrowSvg />
      </div>
    </>
  );
};

export default ArrowsWebcam;
