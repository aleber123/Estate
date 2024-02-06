import React from 'react';
import fontStyles from '../Fonts.module.css'; // Adjust the path as necessary

const NewArrivals = () => {
  return (
    <div className={fontStyles.container}>
      <h1 className={fontStyles.h1}>VÅRA HEM</h1>
      <h2 className={fontStyles.h2}>NEW ARRIVALS</h2>
      <p className={fontStyles.p}>
        Välkommen till våra vackra hem, här ser du några av de senast inkomna hemmen hos oss.
      </p>
    </div>
  );
};

export default NewArrivals;
