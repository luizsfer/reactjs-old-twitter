import React from 'react';

import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Bar from '../../components/Bar';
import Body from '../../components/Body';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <Banner item="Luiz's Banner" />
      <Bar />
      <Body />
    </>
  );
};

export default Dashboard;
