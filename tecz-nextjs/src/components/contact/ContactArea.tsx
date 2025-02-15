
import React from 'react';
import Image from 'next/image';
import ContactForm from '../forms/ContactForm';
import main_bg from "@/assets/img/thumbs/contact-main-bg-1.jpg";

const contact_content = {
  sub_title: "Let's Talk With Us",
  title: "Grow Your Business With Our Expertise",
  info: "Leverage our expertise to accelerate your business growth with tailored, innovative technology solutions that enhance efficiency, drive engagement, and deliver lasting results.",
  location_data: [
    {
      id: 1,
      location_title: "Bangalore",
      address: "E-1, Beech, MANYATA EMBASSY BUSINESS PARK, Bengaluru, Karnataka",
      phone: "+91-7907097373",
      email: "info@Nayajivtechnologies.com",
    }
    
  ]
}
const { sub_title, title, info, location_data } = contact_content

const ContactArea = ({style} : any) => {
  return (
    <>
      <section id="contact-one-page" className={`contact-area pt-115 ${style? "pb-25": "pb-80"}`}>
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6">
              <div className="tp-contact-main mb-40">
                <div className="tp-section tp-section-two mb-25">
                  <span className="tp-section-sub-title"><i className="flaticon-edit"></i>{sub_title}</span>
                  <h4 className="tp-section-title">{title}</h4>
                  <div className="tp-section-title-wrapper">
                    <p>{info}</p>
                  </div>
                </div>
                <div className="tp-contact-main-thumb mb-40 w-img">
                  <Image src={main_bg} alt="image-title" />
                </div>
                <div className="tp-contact-location-wrap d-flex align-items-center">
                  {location_data.map((item, i) =>
                    <div key={i} className={`tp-contact-location ${i === 1 ? "ml-40" : ""}`}>
                      <span className="tp-contact-location-title">{item.location_title}</span>
                      <a href="#"><i className="fa-light fa-location-dot"></i>{item.address}</a>
                      <a href="tel:0123456"><i className="fa-light fa-phone"></i>{item.phone}</a>
                      <a href="mailto:hello@teczinfo.com"><i className="fa-light fa-envelope"></i>{item.email}</a>
                    </div>
                  )} 
                </div>
              </div>
            </div>
            <div className="offset-xl-1 col-xl-6 col-lg-6">
              <div className="tp-contact-details-form mb-40">
                <ContactForm /> 
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactArea;