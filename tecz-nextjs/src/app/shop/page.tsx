import Shop from '@/components/inner-shop/shop';
import Wrapper from '@/layout/Wrapper';
import React from 'react';

export const metadata = {
  title: "Nayajiv Technologies - Complete IT solution",
};

const index = () => {
  return (
    <Wrapper>
      <Shop />
    </Wrapper>
  );
};

export default index;