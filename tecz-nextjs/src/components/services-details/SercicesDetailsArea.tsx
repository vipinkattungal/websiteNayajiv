'use client'
import Link from 'next/link';
import React from 'react';
import services_details_thumb_1 from "@/assets/img/services/details/services-details-thumb-1.jpg"
import Image from 'next/image';


interface DataType {
  title_1: string;
  title_2: string;
  title_3: string;
  service_list: string[];
  contact_info: {
    id: number;
    icon: string;
    title: string;
    info: string;
    target: string;
  }[];
  sm_des_1: string;
  sm_des_2: string;
  check_item: string[];
  services_faq: {
    title: string;
    info: string;
  }[];
  services_features: {
    title: string;
    info: string;
  }[];
}

const services_content: DataType = {
  title_1: "Services",
  title_2: "Have Any Problem? Please, Contact",
  title_3: "Web Development",
  service_list: [
    "Cloud Service",
    "Web Development",
    "Ui/Ux Designing",
    "IT Management",
    "Data Visualization",
    "Security System",
  ],
  contact_info: [
    {
      id: 1,
      icon: "fa-light fa-phone",
      title: "Call Us",
      info: "+99 345 234 5678",
      target: "",
    },
    {
      id: 2,
      icon: "fa-sharp fa-light fa-envelope",
      title: "Write to Us",
      info: "teczinfo@gmail.com",
      target: "",
    },
    {
      id: 3,
      icon: "fa-sharp fa-light fa-location-dot",
      title: "Our Address",
      info: "Potsdamer Platz 9797",
      target: "",
    },
  ],

  sm_des_1: "Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ndustry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  sm_des_2: "Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ndustry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  check_item: [
    "Neque porro est qui dolorem ipsum quaed inventore veritatis",
    "Neque porro est qui dolorem ipsum quaed inventore veritatis",
  ],
  services_faq: [
    { title: "Why IT Solution?", info: "We always try to give best services" },
    { title: "Best Solution", info: "We always try to give best services" },
  ],
  services_features: [
    { title: "Website Development", info: "copytyping ipsum dolor sit amet do" },
    { title: "Ui/Ux <br /> Designing", info: "refreshing ipsum dolor sit amet do" },
    { title: "Data <br />  Analysis", info: "inventore ipsum dolor sit amet do" },
  ]
}
const { title_1, title_2, title_3, service_list, contact_info, sm_des_1, sm_des_2, check_item, services_faq, services_features } = services_content

const SercicesDetailsArea = () => {
  return (
    <>
      <section className="services-area pt-115 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="tp-services-details-wrap mb-40">
                <div className="tp-services-details-services mb-50">
                  <h4 className="tp-services-details-services-title">{title_1}</h4>
                  <div className="tp-services-details-services-wrap">
                    {service_list.map((list, i) => <Link key={i} href="#">{list}<i className="fa-light fa-arrow-right"></i></Link>)}
                  </div>
                </div>
                <div className="tp-services-details-contact">
                  <div className="tp-services-details-contact-bg" style={{ backgroundImage: `url(/assets/img/services/details/services-details-bg-1.jpg)` }}></div>
                  <h5 className="tp-services-details-contact-title">{title_2}</h5>

                  {contact_info.map((item, index) =>
                    <div key={index} className={`tp-services-details-contact-item d-flex align-items-center ${index === 0 ? "mb-25" : ""} ${index === 1 ? "mb-25" : ""}`}>
                      <div className="tp-services-details-contact-item-icon">
                        <i className={item.icon}></i>
                      </div>
                      <div className="tp-services-details-contact-item-content">
                        <span>{item.title}</span>
                        <a href={index === 0 ? `tel:${item.info}` : index === 1 ? `mailto:${item.info}` : "#"}>{item.info}</a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="tp-services-details-wrapper ml-30">
                <div className="tp-services-details-main-thumb mb-30 w-img">
                  <Image src={services_details_thumb_1} alt="image" />
                </div>
                <h4 className="tp-services-details-title mb-20">{title_3}</h4>
                <p>{sm_des_1}</p>
                <div className="tp-services-details-check d-flex align-items-center mt-50">
                  {check_item.map((check, check_index) =>
                    <div key={check_index} className={`tp-services-details-check-item d-flex align-items-center ${check_index === 1 ? "ml-55" : ""} mb-55`}>
                      <i className="fa-light fa-check"></i>
                      <span>{check}</span>
                    </div>
                  )}
                </div>
                <div className="tp-services-details-faq">
                  <div className="row">
                    {services_faq.map((ser_faq, ser_index) =>
                      <div key={ser_index} className="col-lg-6">
                        <div className="tp-services-details-faq-item d-flex align-items-center mb-50">
                          <div className="tp-services-details-faq-item-icon">
                            <i className="flaticon-medal"></i>
                          </div>
                          <div className="tp-services-details-faq-item-content">
                            <h4 className="tp-services-details-faq-title">{ser_faq.title}</h4>
                            <span>{ser_faq.info}</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <h4 className="tp-services-details-title">{title_3}</h4>
                <p>{sm_des_2}</p>
                <div className="tp-services-details-item-wrap mt-60">
                  <div className="row">
                    {services_features.map((ser_fea, ser_fea_index) =>
                      <div key={ser_fea_index} className="col-lg-4">
                        <div className="tp-services-details-item-wrapper mb-40">
                          <div className="tp-services-details-item-icon">
                            <i className="flaticon-coding"></i>
                          </div>
                          <h4 className="tp-services-details-item-title">
                            <span dangerouslySetInnerHTML={{ __html: ser_fea.title }}></span>
                          </h4>
                          <p>{ser_fea.info}</p>
                        </div>
                      </div>
                    )}
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

export default SercicesDetailsArea;