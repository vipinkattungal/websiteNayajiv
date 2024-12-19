'use client'
import React from 'react';

import Image, { StaticImageData } from 'next/image';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import testimonial_img_1 from "@/assets/img/testimonial/sm/testimonial-5-thumb-1.png";
import testimonial_img_2 from "@/assets/img/testimonial/sm/testimonial-5-thumb-2.png";
import testimonial_quote from "@/assets/img/testimonial/testimonial-5-quote.png";
import testimonial_shape_1 from "@/assets/img/testimonial/testimonial-5-shape-1.png";
import testimonial_shape_2 from "@/assets/img/testimonial/testimonial-5-shape-2.png";


interface DataType {
  sub_title: string;
  title: string;
  info: React.JSX.Element;
  testimonial_data: {
      id: number;
      img: StaticImageData;
      name: string;
      job_title: string;
      sm_des: string;
  }[];
}

const testimonial_content: DataType = {
  sub_title: "What Else Here",
  title: "What They're Telling About Our Tecz",
  info: <>System is a term used to refer to an organ collection <br /> symbols and processes that may be operate on <br /> symbols. Perspiciatis omni</>,
  testimonial_data: [
    {
      id: 1,
      img: testimonial_img_1,
      name: "Harry Newman",
      job_title: "Co Founder",
      sm_des: "Nayajiv Technologies has been a key partner in our digital transformation journey. Their team delivered a custom web solution that perfectly aligned with our business needs. Their professionalism, attention to detail, and commitment to quality are unmatched. Highly recommend them!",
    },
    {
      id: 2,
      img: testimonial_img_2,
      name: "Jennifer Qurtz",
      job_title: "Co Founder",
      sm_des: "We’ve been working with Nayajiv Technologies for over a year now, and their mobile app development team has exceeded our expectations. Their innovative approach, seamless integration, and continuous support have significantly improved our business operations. They’re more than just a service provider; they are true partners",
    },
    {
      id: 3,
      img: testimonial_img_1,
      name: "Aouse german",
      job_title: "Co Founder",
      sm_des: "Nayajiv Technologies delivered a comprehensive CRM solution for our company that streamlined our processes and boosted productivity. Their expertise in custom software development was evident, and their team made sure everything was tailored to our needs. We couldn't be happier with the results!",
    },
    {
      id: 4,
      img: testimonial_img_2,
      name: "christofer lof",
      job_title: "Software Consultant ",
      sm_des: "The team at Nayajiv Technologies helped us launch our AI-powered solutions, transforming how we operate. From start to finish, they were extremely professional, delivered on time, and provided exceptional ongoing support. We look forward to continuing our partnership with them.",
    },
  ]
}
const { sub_title, title, info, testimonial_data } = testimonial_content

const TestimonialAreaHomeFive = () => {
  return (
    <>
      <section className="testimonial-area fix pt-115 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="tp-testimonial-5-wrap">
                <div className="tp-section tp-section-red mb-35">
                  <span className="tp-section-sub-title">{sub_title}</span>
                  <h4 className="tp-section-title">{title}</h4>
                  <div className="tp-section-title-wrapper">
                    <p>{info}</p>
                  </div>
                </div>
                <div className="tp-testimonial-5-arrow d-flex align-items-center">
                  <div className="tp-testimonial-5-prv mr-10" style={{cursor: 'pointer'}}><i className="fa-regular fa-arrow-left"></i></div>
                  <div className="tp-testimonial-5-nxt" style={{cursor: 'pointer'}}><i className="fa-regular fa-arrow-right"></i></div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="tp-testimonial-5">
                <Swiper
                  modules={[Navigation, Autoplay]}
                  slidesPerView={2}
                  spaceBetween={30}
                  loop={true}
                  autoplay={{
                    delay: 300000
                  }}
                  navigation={{
                    nextEl: '.tp-testimonial-5-nxt',
                    prevEl: '.tp-testimonial-5-prv',
                  }}
                  breakpoints={{
                    1200: {
                      slidesPerView: 2,
                    },
                    992: {
                      slidesPerView: 2,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    576: {
                      slidesPerView: 1,
                    },
                    0: {
                      slidesPerView: 1,
                    },
                  }}
                  className="swiper-container tp-testimonial-5-active">
                  {testimonial_data.map((item, i) =>
                    <SwiperSlide key={i} className="swiper-slide">
                      <div className="tp-testimonial-5-item">
                        <div className="tp-testimonial-5-content">
                          <p>{item.sm_des}</p>
                        </div>
                        <div className="tp-testimonial-5-avatar d-flex">
                          <div className="tp-testimonial-5-avatar-thumb">
                            <Image src={item.img} alt="theme-pure" />
                          </div>
                          <div className="tp-testimonial-5-avatar-content">
                            <div className="tp-testimonial-5-avatar-rating mb-45">
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                            </div>
                            <h5 className="tp-testimonial-5-avatar-title">{item.name}</h5>
                            <span>{item.job_title}</span>
                            <div className="tp-testimonial-5-avatar-quote">
                              <Image src={testimonial_quote} alt="theme-pure" />
                            </div>
                          </div>
                        </div>
                        <div className="tp-testimonial-5-shape-1">
                          <Image src={testimonial_shape_1} alt="theme-pure" />
                        </div>
                        <div className="tp-testimonial-5-shape-2">
                          <Image src={testimonial_shape_2} alt="theme-pure" />
                        </div>
                      </div>
                    </SwiperSlide>
                  )} 
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialAreaHomeFive;