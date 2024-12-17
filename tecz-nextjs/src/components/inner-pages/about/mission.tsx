import React from 'react';

const mission_vision_content = {
  mission_title: "Our Mission",
  mission_text: "At Nayajiv Technologies, our mission is to be the trusted technology partner for businesses worldwide, offering innovative and reliable solutions that drive digital transformation. We are committed to delivering state-of-the-art technology and expertise that help businesses thrive in a fast-paced, ever-evolving market.We aim to provide businesses with the right tech stack to address their unique challenges, streamline their operations, and unlock new growth opportunities. By integrating the latest advancements in AI, mobile app development, web solutions, and custom software, we empower our clients to stay ahead of the competition and navigate their digital journeys seamlessly.Our approach is centered around customer satisfaction, building long-lasting relationships by delivering exceptional service, timely solutions, and ongoing support. We strive to meet the highest standards of excellence while remaining agile enough to adapt to the unique needs of each business. Through our solutions, we aim to equip businesses with the tools to innovate, scale, and succeed in an increasingly competitive landscape",
  vision_title: "Our Vision",
  vision_text: "At Nayajiv Technologies, our vision is to become a global leader in providing cutting-edge, world-class technological solutions that empower businesses to thrive in the digital age. We are dedicated to driving digital transformation by offering innovative, scalable, and secure solutions that not only meet the evolving needs of our clients but also anticipate the future demands of the global market.Our goal is to equip organizations with the right tools and technologies to navigate and excel in an increasingly complex and fast-paced digital landscape. By continuously embracing innovation, excellence, and collaboration, we aim to shape the future of technology, creating a seamless connection between business goals and technological advancements.With a strong focus on long-term partnerships and customer success, we aspire to lead the way in revolutionizing industries, fostering sustainable growth, and creating impactful solutions that drive measurable business results. We envision a future where businesses across the world are empowered to reach their full potential through smart, transformative technology solutions."
};

const { mission_title, mission_text, vision_title, vision_text } = mission_vision_content;

const MissionVisionSection = ({ style, onPageStyle }: any) => {
  return (
    <section id="mission-vision-section" className={`mission-vision-area ${style ? "tp-mission-vision-inner pt-120" : "tp-mission-vision-4"} ${onPageStyle ? "pt-80" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-lg-6">
            <div className="tp-mission-wrapper">
              <h4 className="tp-section-title">{mission_title}</h4>
              <p>{mission_text}</p>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6">
            <div className="tp-vision-wrapper">
              <h4 className="tp-section-title">{vision_title}</h4>
              <p>{vision_text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
