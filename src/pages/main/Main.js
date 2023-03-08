import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Display from '../../components/display/Display';

const Main = ({ count }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://quote-garden.onrender.com/api/v3/quotes').then((res) => {
      console.log(res.data.data);
      setData(res.data.data);
    });
  }, []);
  console.log(data[count]);
  console.log(count);

  return <>{data ? <Display data={data} /> : null}</>;
};

export default Main;
