import { StaticImageData } from "next/image";

import demo_img_1 from "@/assets/img/menu/home-1.jpg";
import demo_img_2 from "@/assets/img/menu/home-2.jpg";
import demo_img_3 from "@/assets/img/menu/home-3.jpg";
import demo_img_4 from "@/assets/img/menu/home-4.jpg";
import demo_img_5 from "@/assets/img/menu/home-5.jpg";
 
interface DataType {
  id: number;
  title: string;
  link: string;
  img_dropdown?: boolean;
  has_dropdown?: boolean;
  sub_menus?: {
      link: string;
      title: string;
      btn_title?: string;
      one_page_link?: string | any;
      one_page_title?: string;
      demo_img?: StaticImageData | any; 
  }[];
}[]
// menu data 
const menu_data: DataType[]  = [
  {
    id: 1,
    title: "Home",
    link: "#", 
    img_dropdown: true,
    sub_menus: [
      // { link: "/",       title: "Home 01", one_page_link: "/home-1-one-page",  demo_img: demo_img_1,  },
      // { link: "/home-2", title: "Home 02", one_page_link: "/home-2-one-page",  demo_img: demo_img_2,  },
      // { link: "/home-3", title: "Home 03", one_page_link: "/home-3-one-page",  demo_img: demo_img_3,  },
      // { link: "/home-4", title: "Home 04", one_page_link: "/home-4-one-page",  demo_img: demo_img_4,  },
      // { link: "/home-5", title: "Home 05", one_page_link: "/home-5-one-page",  demo_img: demo_img_5,  },
    ],
  },
   {
    id: 2,
    title: "Discover us",
    link: "#",
    has_dropdown: true, 
    sub_menus: [
      { link: "/about",             title: "About" }, 
      { link: "/project",         title: "Project" }, 
      { link: "/project-2",         title: "Project 2" }, 
      { link: "/project-details",   title: "Project Details" }, 
      { link: "/team",              title: "Team " }, 
      { link: "/team-details",      title: "Team Details" }, 
      { link: "/testimonial",       title: "Testimonial" }, 
      { link: "/pricing",           title: "Pricing" }, 
      { link: "/faq",               title: "FAQ" }, 
      { link: "/erorr",             title: "Erorr" }, 
    ],
  },
   {
    id: 3,
    title: "Service",
    link: "#",
    has_dropdown: true, 
    sub_menus: [
      { link: "/services",             title: "Services" },  
      { link: "/services-details",     title: "Services Details" },  
    ],
  },
  //  {
  //   id: 4,
  //   title: "Blog",
  //   link: "#",
  //   has_dropdown: true, 
  //   sub_menus: [
  //     { link: "/blog",             title: "Blog" },     
  //     { link: "/blog-carousel",    title: "Blog Carousel" },     
  //     { link: "/blog-sidebar",     title: "Blog Sidebar" },      
  //     { link: "/blog-details",     title: "Blog Details" },     
  //   ],
  // },
  //  {
  //   id: 5,
  //   title: "Shop",
  //   link: "#",
  //   has_dropdown: true, 
  //   sub_menus: [
  //     { link: "/shop",             title: "Shop" },        
  //     { link: "/shop-details",     title: "Shop Details" },        
  //     { link: "/cart",             title: "Cart" },        
  //     { link: "/checkout",         title: "Checkout" },        
  //   ],
  // },
  {
    id: 6,
    title: "Contact",    
    link: "/contact",
    has_dropdown: false, 
  },
];
export default menu_data;
