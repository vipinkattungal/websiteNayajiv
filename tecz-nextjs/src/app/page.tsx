import React from 'react';         
import Wrapper  from "../layout/Wrapper" 
import HomeOne from '@/components/homes/multi-page/home';

export const metadata = {
  title: "Tecz - IT Solutions & Technology React Next js Template",
};


const MainHome = () => {
  return (
    <Wrapper>
      <HomeOne />
    </Wrapper>
  );
};

export default MainHome;