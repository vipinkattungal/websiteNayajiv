
import Link from 'next/link';
import React from 'react';


interface DataType {
  id: number;
  capital: string;
  icon: string;
  title: string;
  duration: string;
}[]

const feature_data: DataType[] = [
  {
    id: 1,
    capital: "G",
    icon: "flaticon-worldwide",
    title: "Global Networking",
    duration: ".6s",
  },
  {
    id: 2,
    capital: "B",
    icon: "flaticon-consultant",
    title: "Business Consultation",
    duration: ".5s",
  },
  {
    id: 3,
    capital: "W",
    icon: "flaticon-data-visualization",
    title: "Website Development",
    duration: ".4s",
  },
  {
    id: 4,
    capital: "U",
    icon: "flaticon-ux-design",
    title: "UI/UX Design Services",
    duration: ".5s",
  },
  {
    id: 5,
    capital: "S",
    icon: "flaticon-technical-support",
    title: "Support Management",
    duration: ".6s",
  },
]
const FeatureAreaHomeThree = () => {
  return (
    <>
      <section className="feature-area tp-feature-3-bg" style={{ backgroundImage: `url(/assets/img/feature/three/feature-3-bg-1.jpg)` }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-feature-3-wrapper d-flex align-items-center justify-content-between">
                {feature_data.map((item, i) =>
                  <div key={i} className="tp-feature-3-item text-center mb-60 wow bounceIn"
                    data-wow-duration={item.duration} data-wow-delay={item.duration}>
                    <div className="tp-feature-3-item-icon">
                      <i className={item.icon}></i>
                    </div>
                    <div className="tp-feature-3-item-content">
                      <h4 className="tp-feature-3-item-title">{item.title}</h4>
                      <span>{item.capital}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="tp-feature-3-details text-center">
                <span>IT Technology services built specifically for your business.
                  <Link href="/services-details">Find your solution</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureAreaHomeThree;