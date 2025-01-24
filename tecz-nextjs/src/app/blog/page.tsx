import React from 'react';
import Wrapper from '@/layout/Wrapper';
import Blog from '@/components/blogs/blog';

export const metadata = {
  title: "Blog Nayajiv Technologies - IT Solutions & Technology React Next js Template",
};


const index = () => {
  return (
    <Wrapper>
      <Blog />
    </Wrapper>
  );
};

export default index;