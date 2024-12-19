 

import { StaticImageData } from "next/image";
import testimonial_avatar_1 from "@/assets/img/testimonial/sm/testimonial-5-thumb-1.png";
import testimonial_avatar_2 from "@/assets/img/testimonial/sm/testimonial-inner-thumb-1.png";
import testimonial_avatar_3 from "@/assets/img/testimonial/sm/testimonial-inner-thumb-2.png";
import testimonial_avatar_4 from "@/assets/img/testimonial/sm/testimonial-5-thumb-2.png";

interface DataType {
  id: number;
  img: StaticImageData;
  name: string;
  job_title: string;
  sm_info: string;
}[]


const testimonial_data: DataType[] = [
  {
    id: 1,
    img: testimonial_avatar_1,
    name: "William Newman",
    job_title: "Co Founder",
    sm_info: "Nayajiv Technologies has been a key partner in our digital transformation journey. Their team delivered a custom web solution that perfectly aligned with our business needs. Their professionalism, attention to detail, and commitment to quality are unmatched. Highly recommend them!",
  },
  {
    id: 2,
    img: testimonial_avatar_2,
    name: "MR Tanvir",
    job_title: "Project Manager",
    sm_info: "Nayajiv Technologies delivered a comprehensive CRM solution for our company that streamlined our processes and boosted productivity. Their expertise in custom software development was evident, and their team made sure everything was tailored to our needs. We couldn't be happier with the results!",
  },
  {
    id: 3,
    img: testimonial_avatar_3,
    name: "Jamil Rayhan",
    job_title: "Software Consultant",
    sm_info: "The team at Nayajiv Technologies helped us launch our AI-powered solutions, transforming how we operate. From start to finish, they were extremely professional, delivered on time, and provided exceptional ongoing support. We look forward to continuing our partnership with them.",
  },
  {
    id: 4,
    img: testimonial_avatar_4,
    name: "Annette Black",
    job_title: "Head of Engineering",
    sm_info: "Working with Nayajiv Technologies was a smooth and efficient experience. They helped us redesign our website and optimize our SEO strategies, significantly increasing traffic. Their dedication to understanding our goals and delivering results sets them apart. We highly recommend them to anyone looking for top-notch tech solutions",
  },
]
export default testimonial_data