
import Breadcrumb from '@/components/common/breadcrumb/breadcrumb'; 
import VideoAreaHomeFive from '@/components/homes/multi-page/home-5/VideoAreaHomeFive';
import CounterAreaHomeOne from '@/components/homes/multi-page/home/CounterAreaHomeOne';
import FeatureAreaHomeOne from '@/components/homes/multi-page/home/FeatureAreaHomeOne';
import ManagementAreaHomeOne from '@/components/homes/multi-page/home/ManagementAreaHomeOne';
import FooterOne from '@/layout/footers/FooterOne';
import HeaderTwo from '@/layout/headers/HeaderTwo'; 
import AboutTeamArea from './AboutTeamArea';
import StepAreaHomeTwo from '@/components/homes/multi-page/home-2/StepAreaHomeTwo';
import BottomCtaAreaHomeTwo from '@/components/homes/multi-page/home-2/BottomCtaAreaHomeTwo'; 
import HeroAreaHomeTwo from '@/components/homes/multi-page/home-2/HeroAreaHomeTwo'; 
import HeaderOne from '@/layout/headers/HeaderOne';
const About = () => {
  return (
    <>
      <HeaderOne />
      <main>
      <HeroAreaHomeTwo />

        {/* <Breadcrumb top_title='About' title='About Us' /> */}
        <VideoAreaHomeFive style={true} />
        <FeatureAreaHomeOne style={true} />
        {/* <CounterAreaHomeOne /> */}
        <StepAreaHomeTwo/>
        {/* <ManagementAreaHomeOne /> */}
        <AboutTeamArea />
        <BottomCtaAreaHomeTwo />
      </main>
      <FooterOne />
    </>
  );
};

export default About;