import React, { useState } from 'react';

const Loading = () => {
  const [isLoading, setIsLoading] = useState(true);

  setInterval(() => {
    setIsLoading(false);
  }, 6000);

  return (
    <>
      {isLoading ? (
        <div>
          <p>Loading...</p>
        </div>
      ) : (
        <div>
          <p>No data found</p>
        </div>
      )}
    </>
  );
};

export default Loading;
