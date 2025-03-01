import Link from "next/link";


interface social_links_type {
  link: string;
  target: string;
  icon: string;
}


const social_links: social_links_type[] = [
  {
    link: "https://www.facebook.com/people/Nayajiv-Technologies/61573230481124/",
    target: "_blank",
    icon: "fab fa-facebook-f",
  },
  {
    link: "http://twitter.com",
    target: "_blank",
    icon: "fab fa-twitter",
  },
  {
    link: "https://www.linkedin.com",
    target: "_blank",
    icon: "fab fa-linkedin-in",
  },
  {
    link: "https://www.vimeo.com",
    target: "_blank",
    icon: "fab fa-vimeo-v",
  },
];

const SocialLinks = () => {
  return (
    <>
      {social_links.map((l, i) => (
        <Link
          key={i}
          href={l.link}
          target={l.target ? l.target : ""}>
          <i className={l.icon} ></i> {' '}
        </Link>
      ))}
    </>
  );
};

export default SocialLinks;




interface social_links_type_2 {
  link: string;
  color: string;
  icon: string;
}

const social_links_2: social_links_type_2[] = [
  {
    link: "http://facebook.com",
    color: "footer-facebook",
    icon: "fa-brands fa-facebook-f",
  },
  {
    link: "http://twitter.com",
    color: "",
    icon: "fa-brands fa-twitter",
  },
  {
    link: "https://www.linkedin.com/company/nayajiv-technologies",
    color: "footer-linkedin",
    icon: "fa-brands fa-linkedin-in",
  },
  {
    link: "https://www.instagram.com/nayajivtechnologies/",
    color: "footer-insta",
    icon: "fa-brands fa-instagram",
  },
];

export const SocialLinksTwo = () => {
  return (
    <>
      {social_links_2.map((link, index) => (
        <Link
          key={index}
          href={link.link}
          className={link.color}
          target="_blank">
          <i className={link.icon}></i>{" "}
        </Link>
      ))}
    </>
  );
};




// team social links
interface DataType {
  id: number;
  link: string;
  icon: string;
}
const team_social_data: DataType[] = [
  {
    id: 1,
    link: "http://facebook.com",
    icon: "fa-brands fa-facebook-f",
  },
  {
    id: 2,
    link: "http://instagram.com",
    icon: "fa-brands fa-instagram",
  },
  {
    id: 3,
    link: "http://twitter.com",
    icon: "fa-brands fa-twitter",
  },
  {
    id: 3,
    link: "https://www.linkedin.com/company/nayajiv-technologies",
    icon: "fa-brands fa-linkedin-in",
  },
]

export const TeamSocialLinks = () => {
  return (
    <>
      {team_social_data.map((t_item, t_index) => (
        <Link
          key={t_index}
          href={t_item.link}
          target="_blank">
          <i className={t_item.icon}></i>{" "}
        </Link>
      ))}
    </>
  )
}


// copy right text 
type copy_right_text_type = {
  copy_right: JSX.Element;
}

const copy_right_text: copy_right_text_type = {
  copy_right: <>  
    <span>Copyright © {new Date().getFullYear()} Nayajiv by
      <Link target="_blank" href="https://www.nayajivtechnologies.com/"> {' '}Nayajiv Technologies{' '}</Link>
      All Rights Reserved </span>
  </>
}

const { copy_right } = copy_right_text
export const CopyRight = () => {
  return (
    <> {copy_right}</>
  )
}


