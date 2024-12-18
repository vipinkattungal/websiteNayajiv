import React from 'react';
import ContactArea from './ContactArea';
import FooterOne from '@/layout/footers/FooterOne';
import HeaderOne from '@/layout/headers/HeaderOne';
import Breadcrumb from '../common/breadcrumb/breadcrumb';

const Contact = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb top_title='Contact Us' title='Contact Us' />
        <ContactArea />
      </main>
      <FooterOne />
    </>
  );
};

export default Contact;