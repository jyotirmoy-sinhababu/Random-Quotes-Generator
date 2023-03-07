import React, { useEffect, useState } from 'react';

import axios from 'axios';

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('https://quote-garden.onrender.com/api/v3/quotes?author=Bill Cosby')
      .then((res) => {
        console.log(res.data.data);
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
