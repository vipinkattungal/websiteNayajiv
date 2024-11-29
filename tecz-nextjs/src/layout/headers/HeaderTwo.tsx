'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import NavMenu from './Menu/NavMenu';
import { TeamSocialLinks } from '@/components/common/SocialLinks';
import LogoTwo from "@/assets/img/logo/logo-black.png";
import PhoneIcon from "@/assets/img/icon/header-cta-icon.svg";
import UseSticky from '@/hooks/UseSticky';
import HeaderSearch from '@/components/common/HeaderSearch';
import HeaderCart from '@/components/common/HeaderCart';
import Offcanvas from './Menu/Offcanvas';
import OnePageOffcanvas from './Menu/OnePageOffcanvas';
import OnPageMenu from './Menu/OnPageMenu';
import { useSelector } from "react-redux";


type DataType = {
  address: string;
  email: string;
  top_info: string[];
  btn_text: string;
  help_text: string;
  phone_number: string;
}
const header_two_content: DataType = {
  address: "76 San Fransisco Street. New York",
  email: "needhelp@company.com",
  top_info: ["Help", "Support", "Contact",],
  btn_text: "Get Solution",
  help_text: "Need help? Talk to an expert",
  phone_number: "+99 (786) 8765",
}
const { address, email, top_info, btn_text, help_text, phone_number } = header_two_content


const HeaderTwo = ({ onePageHomeThree }: any) => {
  const { sticky } = UseSticky()
  const [searchOpen, setSearchOpen] = useState<boolean>(false)
  const [cartOpen, setCartOpen] = useState<boolean>(false)
  const [openCanvas, setOpenCanvas] = useState<boolean>(false)
  const productItem = useSelector((state: any) => state.cart.cart);

  return (
    <>
      <header>
        <div className="tp-header-area tp-header-3 tp-header-height">
          <div className="tp-header-3-top theme-bg d-none d-lg-block">
            <div className="tp-header-3-top-wrap d-flex align-items-center justify-content-between">
              <div className="tp-header-3-top-left d-flex align-items-center">
                <div className="tp-header-3-top-left-item">
                  <span><i className="fa-solid fa-location-dot"></i></span>
                  <a href="#">{address}</a>
                </div>
                <div className="tp-header-3-top-left-item">
                  <span><i className="fa-solid fa-envelope"></i></span>
                  <a href={`mailto:${email}`}>{email}</a>
                </div>
              </div>
              <div className="tp-header-3-top-right d-flex align-items-center">
                <div className="tp-header-3-top-info">
                  {top_info.map((info, i) => <a href="#" key={i}>{info}</a>)}
                </div>
                <div className="tp-header-3-top-social">
                  <TeamSocialLinks />
                </div>
              </div>
            </div>
          </div>
          <div id="header-sticky" className={`tp-header-3-wrap white-bg d-flex justify-content-between ${sticky ? "header-sticky" : ""}`}>
            <div className="tp-header-3-main d-flex">
              <div className="logo" style={{ backgroundImage: `url(/assets/img/shape/logo-shape-1.png)` }}>
                <Link href="/">
                  <Image data-width="115" src={LogoTwo} alt="image-title" />
                </Link>
              </div>
              <div className="main-menu tp-header-3-menu d-none d-xl-block">
                <nav id="mobile-menu" className="tp-main-menu-content">
                  {!onePageHomeThree && <NavMenu style_2={true} />}
                  {onePageHomeThree && <OnPageMenu style_2={true}  onePageHomeThree={onePageHomeThree} />}

                </nav>
              </div>
            </div>
            <div className="tp-header-right d-flex align-items-center">
              <div className="tp-header-search">
                <button className="tp-header-search-btn tp-search-open-btn" onClick={() => setSearchOpen(true)} type="submit">
                  <i className="fa-light fa-magnifying-glass"></i>
                </button>
              </div>
              <div className="tp-header-cart ml-30">
                <button className="tp-header-cart-btn cartmini-open-btn p-relative" onClick={() => setCartOpen(true)} type="button">
                  <i className="flaticon-shopping-cart"></i>
                  <span>{productItem.length}</span>
                </button>
              </div>
              <div className="tp-header-btn ml-35 mr-30 d-none d-lg-block">
                <a className="tp-btn" href="#">{btn_text}</a>
              </div>
              <div className="d-none d-xxl-block">
                <div className="tp-header-cta d-flex align-items-center">
                  <div className="tp-header-cta-icon d-none d-lg-block">
                    <Image src={PhoneIcon} alt="image-title" />
                  </div>
                  <div className="tp-header-cta-content d-none d-lg-block">
                    <p>{help_text}</p>
                    <a href={`tel:${phone_number}`}>Free {phone_number}</a>
                  </div>
                </div>
              </div>
              <div className="offcanvas-btn d-xl-none ml-30">
                <button className="offcanvas-open-btn" onClick={() => setOpenCanvas(true)}>
                  <i className="fa-solid fa-bars"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <HeaderSearch searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
      <HeaderCart cartOpen={cartOpen} setCartOpen={setCartOpen} />
      {!onePageHomeThree && <Offcanvas openCanvas={openCanvas} setOpenCanvas={setOpenCanvas} />}

      {onePageHomeThree && <OnePageOffcanvas
        openCanvas={openCanvas}
        setOpenCanvas={setOpenCanvas}
        onePageHomeThree={onePageHomeThree}
      />}
     
    </>
  );
};

export default HeaderTwo;