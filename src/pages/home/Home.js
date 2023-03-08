import React, { useState } from 'react';
import Header from '../../components/header/Header';
import Main from '../main/Main';

const Home = () => {
  const [count, setCount] = useState(0);

  const controlCount = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <Header controlCount={controlCount} />
      <Main count={count} />
    </>
  );
};

export default Home;
