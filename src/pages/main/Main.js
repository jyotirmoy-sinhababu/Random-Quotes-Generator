import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Display from '../../components/display/Display';
import Header from '../../components/header/Header';

const Main = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://quote-garden.onrender.com/api/v3/quotes').then((res) => {
      console.log(res.data.data);
      setData(res.data.data);
    });
  }, []);
  console.log(data);

  return (
    <>
      <div>
        <Header />
      </div>
      {data ? (
        <Display />
      ) : (
        <div>
          <h2>Data not Found</h2>
        </div>
      )}
    </>
  );
};

export default Main;
