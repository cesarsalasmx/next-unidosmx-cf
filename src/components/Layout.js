import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Link as ScrollLink } from "react-scroll";
import { gql, useMutation } from "@apollo/client";

const ADD_SESSION = gql`
mutation AddSesion(
  $page_name: String!,
  $ip: String!,
  $browser: String!,
  $date: Date!,
  $device: String!,
  $referrer: String!,
){
  AddSessionMutation(
    page_name: $page_name,
    ip: $ip,
    browser: $browser,
    date: $date,
    device: $device,
    referrer: $referrer,
  ){
    id
  }
}
`;

const getIP = async () => {
  const response = await fetch(`https://api.ipify.org/?format=json`);
  const {ip} = await response.json();
  return ip;
}
const Layout = (props) => {
 
  const [scrollTop, setScrollTop] = useState(false);
  const handleScrollTop = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > 70) {
        setScrollTop(true);
      } else if (window.scrollY < 70) {
        setScrollTop(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollTop);
    return () => {
      window.removeEventListener("scroll", handleScrollTop);
    };
  }, [scrollTop]);
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{props.pageTitle}</title>
      </Head>

      <div className="page-wrapper" id="wrapper">
        {props.children}
      </div>

      {scrollTop === true ? (
        <ScrollLink
          to="wrapper"
          smooth={true}
          duration={500}
          className="scroll-to-top"
        >
          <i className="fa fa-angle-up"></i>
        </ScrollLink>
      ) : null}
      
    </div>
  );
};

export default Layout;
