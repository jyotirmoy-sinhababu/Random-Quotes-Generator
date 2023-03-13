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
          <div className='home-btn-cnt'>
            <button
              onClick={() => {
                setIsBtnOn(false);
              }}
              className='home-btn'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='40'
                height='40'
                fill='currentColor'
                className='bi bi-arrow-left-circle'
                viewBox='0 0 16 16'
              >
                <path
                  fillRule='evenodd'
                  d='M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z'
                />
              </svg>
            </button>
          </div>
          <div className='author-name-cnt'>
            <p className='author-name'>{data[count].quoteAuthor}</p>
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
