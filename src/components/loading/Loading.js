import React, { useState } from 'react';

import './loading.css';

const Loading = () => {
  const [isLoading, setIsLoading] = useState(true);

  setInterval(() => {
    setIsLoading(false);
  }, 6000);

  return (
    <>
      {isLoading ? (
        <div className='loading-cnt'>
          <p className='loading-txt'>Loading...</p>
        </div>
      ) : (
        <div className='no-data-cnt'>
          <p className='no-data-txt'>No data found</p>
          <p>
            <strong>
              Note: Refresh the page or check your internet connection
            </strong>
          </p>
        </div>
      )}
    </>
  );
};

export default Loading;
