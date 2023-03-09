import React, { useState } from 'react';
import './display.css';

import Loading from '../loading/Loading';

import axios from 'axios';

const Display = ({ data, count, isBtnOn, handleClick }) => {
  const [apiData, setApiData] = useState([]);

  const fetchData = (name) => {
    axios
      .get(`https://quote-garden.onrender.com/api/v3/quotes?author=${name}`)
      .then((res) => {
        console.log(res.data.data);
        setApiData(res.data.data);
      });
  };

  console.log(isBtnOn);
  console.log(apiData);
  return (
    <>
      {!isBtnOn ? (
        <div className='display-cnt'>
          <div className='display-first-cnt'>
            <div className='display-first-empty'></div>
            <div className='display-first-txt-cnt'>
              <p className='display-first-txt'>
                {data ? data[count].quoteText : null}
              </p>
            </div>
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
            <div>
              <Loading />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Display;
