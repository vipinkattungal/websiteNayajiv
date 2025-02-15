
import React from 'react';
import Image from 'next/image';
import shape_1 from "@/assets/img/feature/one/feature-shape-1.png";
import features_shape from "@/assets/img/feature/one/features-bg.png";

interface DataType {
  id: number;
  fade: string;
  icon: string;
  title: React.JSX.Element;
  sm_info: string;
}[]
const feature_data: DataType[] = [
  {
    id: 1,
    fade: "fadeInRight",
    icon: "flaticon-solution-1",
    title: <>Web <br /> Development</>,
    sm_info: "We specialize in building responsive, dynamic, and user-friendly websites tailored to meet your unique business goals. Combining cutting-edge design with seamless functionality, we leverage modern technologies to deliver exceptional digital solutions that enhance engagement, foster growth, and drive measurable result.",
  },
  {
    id: 2,
    fade: "fadeInUp",
    icon: "flaticon-search-engine",
    title: <>Mobile App <br /> Development</>,
    sm_info: "We specialize in crafting intuitive, high-performance mobile applications for iOS, Android, and cross-platform use. Designed to meet your business goals, our solutions offer seamless user experiences, advanced functionality, and scalability, ensuring robust performance and alignment with your objectives.",
  },
  {
    id: 3,
    fade: "fadeInLeft",
    icon: "flaticon-speed",
    title: <>AI <br /> Powered Solution</>,
    sm_info: "Harness the potential of artificial intelligence to revolutionize your business operations. Our AI-driven solutions are tailored to boost efficiency, streamline processes, and provide actionable insights. From intelligent automation to predictive analytics, we develop cutting-edge systems that enable smarter, data-informed decision-making.",
  },
]

const FeatureAreaHomeOne = ({style, style_onpage} : any) => {
  return (
    <> 
      <section id="services-one-page" className={`feature-area pb-90 p-relative ${style ? "pt-120 feature-inner-bg" : style_onpage? "pt-140" : "pt-140 mb-160"}`}
      style={{backgroundImage: `url(${style ? "assets/img/feature/inner/feature-inner-bg-1.jpg" : null})`}}
      >
        <div className="container">
          <div className="row">
            {feature_data.map((item, i) =>
              <div key={i} className="col-lg-4 col-md-6">
                <div className={`tp-feature-item mb-30 wow ${item.fade}`} data-wow-duration="1s" data-wow-delay=".4s">
                  <div className="tp-feature-icon">
                    <i className={item.icon}></i>
                  </div>
                  <div className="tp-feature-content">
                    <h4 className="tp-feature-content-title">{item.title}</h4>
                    <p>{item.sm_info}</p>
                  </div>
                  <div className="tp-feature-shape-two">
                    <Image src={shape_1} alt={item.sm_info} />
                  </div>
                </div>
              </div>
            )} 
          </div>
        </div>
        <div className="tp-feature-shape">
          <div className="tp-feature-shape-one w-img">
            <Image src={features_shape} alt="image-title" />
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureAreaHomeOne;