import React from 'react';

const Display = ({ data, count }) => {
  console.log(data[count]);

  console.log(count);
  return (
    <div>
      <div>
        <div></div>
        {/* <div>{data[count].quoteText}</div> */}
      </div>
    </div>
  );
};

export default Display;
