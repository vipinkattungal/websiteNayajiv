
import HeaderTwo from '@/layout/headers/HeaderTwo';
import React from 'react';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import FeatureAreaHomeOne from '../homes/multi-page/home/FeatureAreaHomeOne';
import OfferingAreaHomeThree from '../homes/multi-page/home-3/OfferingAreaHomeThree';
import PricingAreaHomeFive from '../homes/multi-page/home-5/PricingAreaHomeFive';
import BrandAreaHomeThree from '../homes/multi-page/home-3/BrandAreaHomeThree';
import TeamFormArea from '../inner-pages/team/TeamFormArea';
import CtaAreaHomeOne from '../homes/multi-page/home/CtaAreaHomeOne';
import FooterOne from '@/layout/footers/FooterOne';

const Services = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb top_title='Services' title='Our Services' />
        <FeatureAreaHomeOne style={true} />
        <OfferingAreaHomeThree />
        {/* <PricingAreaHomeFive style={true} /> */}
        <BrandAreaHomeThree style={true} />
        <TeamFormArea />
        <CtaAreaHomeOne />
      </main>
      <FooterOne style_inner={true} />

    </>
  );
};

export default Services;