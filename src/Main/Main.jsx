import React from 'react';
import Navbar from '../Component/Home/Navbar';
import Banner from '../Component/Home/Banner/Banner';
import Teamcenter from '../Component/Home/Teamcenter X/Teamcenter';
import Advantages from '../Component/Home/Advantages/Advantages';
import PLM from '../Component/Home/PLM/PLM';
import CloudPLM from '../Component/Home/CloudPLM/CloudPLM';

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Teamcenter></Teamcenter>
      <Advantages></Advantages>
      <PLM></PLM>
      <CloudPLM></CloudPLM>
    </div>
  );
};

export default Main;