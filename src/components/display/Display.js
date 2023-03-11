import React, { useState } from 'react';
import './display.css';

import Loading from '../loading/Loading';

import axios from 'axios';

const Display = ({ data, count, isBtnOn, setIsBtnOn, handleClick }) => {
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
          <div className='display-second-cnt'>
            <p
              className='display-second-txt-name'
              onClick={() => {
                fetchData(data[count].quoteAuthor);
                handleClick();
              }}
            >
              {data ? data[count].quoteAuthor : null}
            </p>
            <p className='display-second-txt-genre'>
              {data ? data[count].quoteGenre : null}
            </p>
          </div>
        </div>
      ) : (
        <div className='display-author-cnt'>
          <div className='author-name-cnt'>
            <p className='author-name'>{data[count].quoteAuthor}</p>
          </div>
          <div>
            <button
              onClick={() => {
                setIsBtnOn(false);
              }}
              className='home-btn'
            >
              Home page
            </button>
          </div>
          <div className='display-quotes-cnt'>
            {' '}
            {apiData ? (
              apiData.map((item) => {
                return (
                  <div key={item.id}>
                    <div className='display-quote'>
                      <div className='display-empty-cnt'></div>
                      <div className='display-author-quotes'>
                        <p>{item.quoteText}</p>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div>
                <Loading />
              </div>
            )}
            <div></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Display;
