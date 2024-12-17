
import HeaderTwo from '@/layout/headers/HeaderTwo';
import React from 'react';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import SercicesDetailsArea from './SercicesDetailsArea';
import FooterOne from '@/layout/footers/FooterOne';
import HeaderOne from "@/layout/headers/HeaderOne";
import TestimonialAreaHomeTwo from "../inner-pages/testimonial/TestimonialAre";

const ServicesDetails = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb top_title='Services Details' title='Services Details' />
        <SercicesDetailsArea />
        <TestimonialAreaHomeTwo/>
      </main>
      <FooterOne />
    </>
  );
};

export default ServicesDetails;