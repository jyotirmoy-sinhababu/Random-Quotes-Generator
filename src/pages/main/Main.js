import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Display from '../../components/display/Display';
import Header from '../../components/header/Header';
import Loading from '../../components/loading/Loading';

const Main = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [isBtnOn, setIsBtnOn] = useState(false);

  useEffect(() => {
    axios.get('https://quote-garden.onrender.com/api/v3/quotes').then((res) => {
      console.log(res.data.data);
      setData(res.data.data);
    });
  }, []);
  console.log(data);

  const controlCount = () => {
    if (count >= 0 && count != 9) {
      setCount((prev) => prev + 1);
    }
    if (count == 9) {
      setCount(0);
    }
  };

  const handleClick = () => {
    setIsBtnOn(true);
  };

  return (
    <>
      <div className='main-hd-cnt'>
        <Header controlCount={controlCount} isBtnOn={isBtnOn} />
      </div>
      {data && data.length ? (
        <Display
          count={count}
          data={data}
          isBtnOn={isBtnOn}
          handleClick={handleClick}
        />
      ) : (
        <div>
          <Loading />
        </div>
      )}
    </>
  );
};

export default Main;
