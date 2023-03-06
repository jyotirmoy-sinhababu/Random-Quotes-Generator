import React, { useEffect, useState } from 'react';

import axios from 'axios';

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('https://quote-garden.onrender.com/api/v3/quotes').then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);

  return (
    <div>
      <p>home</p>
    </div>
  );
};

export default Home;
