
import Link from 'next/link';
import React from 'react';


interface DataType {
  sub_title: string;
  title: React.JSX.Element;
  info: string;
  offering_data: {
      id: number;
      title: string;
      info: string;
  }[];
}

const offering_content: DataType = {
  sub_title: "What We're Offering",
  title: <>We Provide Exclusive Service <br /> For Your Business</>,
  info: "Nayajiv Technologies specializes in building web and mobile applications, AI solutions, UI/UX design, animations, digital marketing, and data analytics. we deliver scalable, secure, and innovative solutions that drive business growth and success.",
  offering_data: [
    {
      id: 1,
      title: "Web Development",
      info: "Building responsive, secure, and scalable websites tailored to your business needs",
    },
    {
      id: 2,
      title: "Mobile App Development",
      info: "Creating user-friendly, high-performance mobile apps for iOS and Android",
    },
    {
      id: 3,
      title: "Custom software",
      info: "Developing tailored, scalable, and secure software solutions for business",
    },
    {
      id: 4,
      title: "Ui/Ux Designing",
      info: "Crafting intuitive and visually appealing designs for seamless user experiences",
    },
    {
      id: 5,
      title: "Digital Marketing",
      info: "Driving growth with targeted strategies for SEO, social media, and online campaigns",
    },
    {
      id: 6,
      title: "Data Analysis",
      info: "Extracting valuable insights from data to support decision-making and optimize business strategies",
    },
    {
      id: 7,
      title: "Animation and media",
      info: "Creating engaging animations and multimedia content to enhance brand storytelling and user experience.",
    },
    {
      id: 8,
      title: "AI Development",
      info: "Building intelligent solutions with machine learning and AI to automate processes and drive innovation",
    },
  ]
}
const { sub_title, title, info, offering_data } = offering_content

const OfferingAreaHomeThree = () => {
  return (
    <>
      <section id="services-one-page" className="offering-area tp-offer-bg pb-80 pt-120" style={{ backgroundImage: `url(/assets/img/bg/offer-bg-1.jpg)` }}>
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-7">
              <div className="tp-section tp-section-white-two mb-80">
                <span className="tp-section-sub-title">{sub_title}</span>
                <h4 className="tp-section-title">{title}</h4>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="tp-section-title-wrapper mb-80">
                <p>{info}</p>
              </div>
            </div>
          </div>
          <div className="row">
            {offering_data.map((item, i) =>
              <div key={i} className="col-xl-3 col-lg-4 col-md-6">
                <div className="tp-offer-item mb-40 wow bounceIn" data-wow-duration=".6s" data-wow-delay=".6s">
                  <div className="tp-offer-item-icon">
                    <i className="flaticon-ux-design"></i>
                  </div>
                  <div className="tp-offer-item-content">
                    <h4 className="tp-offer-item-title under-line-white">
                      <Link href="/services-details">{item.title}</Link></h4>
                    <p>{item.info}</p>
                  </div>
                  <div className="tp-offer-item-btn">
                    <Link href="/services-details">Read More <i className="fa-regular fa-arrow-right"></i></Link>
                  </div>
                </div>
              </div>
            )} 
          </div>
        </div>
      </section>
    </>
  );
};

export default OfferingAreaHomeThree;