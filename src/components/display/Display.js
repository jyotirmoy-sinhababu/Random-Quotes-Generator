import React from 'react';

const Display = ({ data, count }) => {
  return (
    <div>
      <div>
        <div></div>
        <div>{data ? data[count].quoteText : null}</div>
      </div>
    </div>
  );
};

export default Display;
