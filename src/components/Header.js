import React, { useState, useEffect } from "react";
import NavLinks from "./NavLinks";
import Image from 'next/image';
import LogoImage from "../assets/images/unidos-mx-logo-pruple.png";
import Link from "next/link";
const HeaderHome = (props) => {
  const [sticky, setSticky] = useState(false);

  const handleScroll = () => {
      if (window.scrollY > 70) {
        setSticky(true);
      } else if (window.scrollY < 70) {
        setSticky(false);
      }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sticky]);

  return (
    <header
      className={`site-header-one stricky  ${props.extraClassName} ${
        sticky === true ? "stricky-fixed stricked-menu" : " "
      }`}
    >
      <div className="container-fluid">
        <div className="site-header-one__logo">
          <Link href="/">
            <a><Image src={LogoImage} width="120px" height="60px" alt="awesome post" /></a>
          </Link>
          <span className="side-menu__toggler">
            <i className="fa fa-bars"></i>
          </span>
        </div>
        <div className="main-nav__main-navigation">
          <NavLinks />
        </div>
        <div className="main-nav__right">
          <Link href="/iniciar-sesion" className={`thm-btn ${props.btnClass}`}>
            <a className={`thm-btn ${props.btnClass}`}><span>Iniciar sesión</span></a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HeaderHome;
