'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import project_img_1 from "@/assets/img/project/three/project-3-thumb-1.jpg";
import project_img_2 from "@/assets/img/project/three/project-3-thumb-2.jpg";
import project_img_3 from "@/assets/img/project/three/project-3-thumb-3.jpg";
import project_img_4 from "@/assets/img/project/three/project-3-thumb-4.jpg";
import Image from 'next/image';
import Link from 'next/link';
import project_data from '@/data/ProjectData';

const project_content = {
  sub_title: "Recently Completed work",
  title: <>Check Our latest projects Just <br /> We Have Done</>,
}
const { sub_title, title } = project_content

const setting = {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 4000,
  },
  breakpoints: {
    '1200': {
      slidesPerView: 4,
    },
    '992': {
      slidesPerView: 3,
    },
    '768': {
      slidesPerView: 2,
    },
    '576': {
      slidesPerView: 2,
    },
    '0': {
      slidesPerView: 1,
    },
  },
}

const ProjectAreaHomeThree = () => {

  return (
    <>
      <section id="project-one-page" className="project-area tp-project-3-bg pt-115 pb-90" style={{ backgroundImage: `url(/assets/img/project/three/project-3-bg-1.jpg)` }}>
        <div className="container tp-project-3-width">
          <div className="row">
            <div className="col-12">
              <div className="tp-section tp-section-3 mb-50 text-center">
                <span className="tp-section-sub-title">{sub_title}</span>
                <h4 className="tp-section-title">{title}</h4>
              </div>
            </div>
          </div>
          <Swiper {...setting} className="swiper-container tp-project-3-slider-active">
            {project_data.map((item, i) =>
              <SwiperSlide key={i} className="tp-project-3-item mb-30 tp-thumb-common fix wow fadeInRight" data-wow-duration="1.2s" data-wow-delay=".6s">
                <div className="tp-project-3-thumb">
                  <div className="tp-thumb-common-overlay wow"></div>
                  <Image src={item.img} style={{ width: '100%', height: 'auto' }} alt="image-title" />
                </div>
                <div className="tp-project-3-info d-flex justify-content-between align-items-center">
                  <div className="tp-project-3-content">
                    <span>{item.tag}</span>
                    <h4 className="tp-project-3-title under-line-white"><Link href="/project-details">{item.title}</Link></h4>
                  </div>
                  <div className="tp-project-3-icon">
                    <Link href="/project-details"><i className="fa-sharp fa-regular fa-arrow-right"></i></Link>
                  </div>
                </div>
              </SwiperSlide>
            )}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default ProjectAreaHomeThree;