import React from 'react';

import './LoadingSpinner.scss';

const LoadingSpinner = ({ asOverlay }) => {
  return (
    <div className={`${asOverlay && 'overlay'}`}>
      <div className='ring'></div>
    </div>
  );
};

export default LoadingSpinner;
