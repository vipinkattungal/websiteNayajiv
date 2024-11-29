
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
  info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. quis nostrud exercitation ullamco laboris",
  offering_data: [
    {
      id: 1,
      title: "Website Development",
      info: "Donec suscipit ante ipsum. Donec convallis quality torto",
    },
    {
      id: 2,
      title: "Ui/Ux Designing",
      info: "Donec suscipit ante ipsum. Donec convallis quality torto",
    },
    {
      id: 3,
      title: "Digital Marketing",
      info: "Donec suscipit ante ipsum. Donec convallis quality torto",
    },
    {
      id: 4,
      title: "Data Analysis",
      info: "Donec suscipit ante ipsum. Donec convallis quality torto",
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