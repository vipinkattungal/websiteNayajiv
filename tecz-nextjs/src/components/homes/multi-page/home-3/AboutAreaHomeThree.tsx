
import React from 'react';
import Image from 'next/image';

import about_shape_1 from "@/assets/img/about/three/about-3-thumb-1.jpg";
import about_shape_2 from "@/assets/img/about/three/about-3-thumb-2.jpg";
import about_shape_3 from "@/assets/img/about/three/about-3-shape-1.jpg";
import check_icon from "@/assets/img/icon/check-icon-2.svg";
import Link from 'next/link';

const about_content = {
  project_title: "Project Completed",
  project_count: 1700,
  sub_title: "Welcome to Tecz",
  title: <>Easy Solutions For Your <br /> IT Problems</>,
  info: <>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiustempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse <br /> abore et dolore magna </>,
  title_2: "Deliver awesome idea",
  info_2: <>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusm</>,
  list_1: "Sed do eiusmod tempor incidi-dunt ut labore",
  list_2: "Donec laoreet leo a ullamcorper ornar",
  customar_count: 2500,
  customar_title: <>Satisfied <br /> Customer</>
}
const {project_count, project_title, sub_title, title, info, title_2, info_2, list_1, list_2, customar_count, customar_title} = about_content

const AboutAreaHomeThree = () => {
  return (
    <>
      <section className="about-area pt-115 tp-about-3 pb-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="tp-about-3-wrap">
                <div className="tp-about-3-thumb-1 tp-thumb-common fix mb-30 wow fadeInRight" data-wow-duration="1s" data-wow-delay=".5s">
                  <div className="tp-thumb-common-overlay wow"></div>
                  <Image src={about_shape_1} style={{ height: 'auto'}} alt="image-title" />
                </div>
                <div className="tp-about-3-thumb-2 wow fadeInLeft tp-thumb-common fix" data-wow-duration="1s" data-wow-delay=".5s">
                  <div className="tp-thumb-common-overlay wow"></div>
                  <Image src={about_shape_2} style={{ height: 'auto'}} alt="image-title" />
                </div>
                <div className="tp-about-3-shape-1">
                  <Image src={about_shape_3} alt="image-title" />
                </div>
                <div className="tp-about-3-project">
                  <span>{project_title}</span>
                  <h3 className="tp-about-3-project-title">{project_count}+</h3>
                </div>
              </div>
            </div>
            <div className="offset-lg-1 col-lg-6">
              <div className="tp-about-3-wrapper mb-50 wow fadeInRight" data-wow-duration="1s" data-wow-delay=".5s">
                <div className="tp-section tp-section-3 mb-50">
                  <span className="tp-section-sub-title">{sub_title}</span>
                  <h4 className="tp-section-title">{title}</h4>
                  <div className="tp-section-title-wrapper">
                    <p>{info}</p>
                  </div>
                </div>
                <div className="tp-about-3-item mb-35">
                  <div className="tp-about-3-item-icon">
                    <i className="flaticon-solution"></i>
                  </div>
                  <div className="tp-about-3-item-content">
                    <h4 className="tp-about-3-item-title">{title_2}</h4>
                    <p>{info_2}</p>
                  </div>
                </div>
                <div className="tp-about-3-list mb-45">
                  <ul>
                    <li><span><Image src={check_icon} alt="image-title" /></span>{list_1}</li>
                    <li><span><Image src={check_icon} alt="image-title" /></span>{list_2}</li>
                  </ul>
                </div>
                <div className="tp-about-3-details  d-flex align-items-center">
                  <div className="tp-about-3-btn">
                    <Link className="tp-btn" href="/about">Learn More</Link>
                  </div>
                  <div className="tp-about-3-customar d-flex align-items-end">
                    <h4 className="tp-about-3-customar-title">{customar_count}+</h4>
                    <p>{customar_title}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutAreaHomeThree;