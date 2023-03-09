import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Display from '../../components/display/Display';
import Header from '../../components/header/Header';
import Loading from '../../components/loading/Loading';

const Main = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

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

  console.log(count);

  return (
    <>
      <div>
        <Header controlCount={controlCount} />
      </div>
      {data && data.length ? (
        <Display count={count} data={data} />
      ) : (
        <div>
          <Loading />
        </div>
      )}
    </>
  );
};

export default Main;
