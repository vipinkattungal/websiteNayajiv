
import Breadcrumb from '@/components/common/breadcrumb/breadcrumb';
import HeaderTwo from '@/layout/headers/HeaderTwo';
import React from 'react';
import ProjectDetailsArea from './ProjectDetailsArea';
import RelatedProject from './RelatedProject';
import FooterOne from '@/layout/footers/FooterOne';

const ProjectDetails = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb top_title='Project Details' title='Project Details' />
        <ProjectDetailsArea />
        <RelatedProject />
      </main>
      <FooterOne />
    </>
  );
};

export default ProjectDetails;