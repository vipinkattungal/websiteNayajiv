import { StaticImageData } from "next/image";

import service_img_1 from "@/assets/img/services/one/services-avater-1.png";
import service_img_2 from "@/assets/img/services/one/services-avater-2.png";
import service_img_3 from "@/assets/img/services/one/services-avater-3.png"; 

interface  DataType{
  id: number;
  alphabet?: string;
  page: string;
  img?: StaticImageData | any ;
  icon?: string | any;
  title: string;
  sm_info: string;
}[]

const service_data: DataType[] = [
  {
    id: 1,
    alphabet: "w",
    page: "home_1",
    img: service_img_1,
    title: "Web Development<br /> Services",
    sm_info:  "We design and develop high-quality websites tailored to your needs, from sleek landing pages to complex web applications. Our solutions are mobile-responsive, secure, and optimized for performance, ensuring a seamless user experience. With a focus on modern design principles and cutting-edge technology, we create digital experiences that drive engagement and deliver measurable results.",
  },
  {
    id: 2,
    alphabet: "E",
    page: "home_1",
    img: service_img_2,
    title: "Entertainment <br /> Animation,Media Solutions ",
    sm_info:  "We deliver cutting-edge solutions for entertainment and media(Animation), including content management, streaming platforms, and interactive experiences. Our services ensure high-quality, engaging, and accessible content across all devices.",
  },
  {
    id: 3,
    alphabet: "B",
    page: "home_1",
    img: service_img_3,
    title: "Business  <br />  Solutions ",
    sm_info:  "Our business solutions streamline processes, enhance productivity, and drive growth. From CRM and ERP systems to analytics and automation, we provide tailored tools to meet your unique business needs and businesses stay ahead in a competitive market.",
  },
  // for home 04 
  {
    id: 1, 
    page: "home_4",
    icon: "flaticon-ux-design",
    title: "Ui/Ux <br /> Designing",
    sm_info:  "We use the mobile apps feature of azure App service to rapidly build engaging cross-platforms and native apps for iOS, android",
  },
  {
    id: 2, 
    page: "home_4",
    icon: "flaticon-data-visualization",
    title: "Data <br /> Visualizaion",
    sm_info:  "We use the mobile apps feature of azure App service to rapidly build engaging cross-platforms and native apps for iOS, android",
  },
  {
    id: 3, 
    page: "home_4",
    icon: "flaticon-search-engine",
    title: "Marketing <br /> Strategy",
    sm_info:  "We use the mobile apps feature of azure App service to rapidly build engaging cross-platforms and native apps for iOS, android",
  },
  {
    id: 4, 
    page: "home_4",
    icon: "flaticon-project-management",
    title: "Business <br /> Strategy",
    sm_info:  "We use the mobile apps feature of azure App service to rapidly build engaging cross-platforms and native apps for iOS, android",
  },

]
export default service_data