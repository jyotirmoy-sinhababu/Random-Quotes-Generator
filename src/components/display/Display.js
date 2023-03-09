import React, { useState } from 'react';

import axios from 'axios';

const Display = ({ data, count }) => {
  const [apiData, setApiData] = useState([]);
  const [isBtnOn, setIsBtnOn] = useState(false);

  const fetchData = (name) => {
    axios
      .get(`https://quote-garden.onrender.com/api/v3/quotes?author=${name}`)
      .then((res) => {
        console.log(res.data.data);
        setApiData(res.data.data);
      });
  };

  const handleClick = () => {
    setIsBtnOn(true);
  };
  console.log(isBtnOn);
  console.log(apiData);
  return (
    <>
      {!isBtnOn ? (
        <div>
          <div>
            <div></div>
            <div>{data ? data[count].quoteText : null}</div>
          </div>
          <div>
            <p
              onClick={() => {
                fetchData(data[count].quoteAuthor);
                handleClick();
              }}
            >
              {data ? data[count].quoteAuthor : null}
            </p>
            <p>{data ? data[count].quoteGenre : null}</p>
          </div>
        </div>
      ) : (
        <div>
          <div>
            <p>{data[count].quoteAuthor}</p>
          </div>
          {apiData ? (
            apiData.map((item) => {
              return (
                <div key={item.id}>
                  <div>
                    <div></div>
                    <div>{item.quoteText}</div>
                  </div>
                </div>
              );
            })
          ) : (
            <div></div>
          )}
        </div>
      )}
    </>
  );
};

export default Display;
