import React, { useState } from "react";
import Layout from "../components/Layout";
//import MobileMenu from "../components/MobileMenu";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import BlogHome from "../components/BlogHome";
import CTAThree from "../components/CTAThree";
import Contact from "../components/Contact";
import Services from "../components/Services";
import FunFact from "../components/FunFact";
import Team from "../components/Team";
import VideoOne from "../components/VideoOne";
import Faq from "../components/FAQ";
import { gql, useQuery } from "@apollo/client";
import decode from 'jwt-decode';
const VIEW_CAUSES = gql`
  query view_causes{
    AllPostsQuery{
      id,
      title,
      content,
      first_name,
      last_name,
      image,
      date,
      value,
      slug
    }
  }
`; 
const HomePage = () => {
  const isAuthenticated = ()=>{
    const token = null
    if (typeof window !== "undefined") {
      token = localStorage.getItem('token');}
    let isLogin = true
    try{
      isLogin = decode(token);
    }catch(e){
      return false
    }
    return isLogin
  };
  console.log(isAuthenticated());
  const { causes, useCauses } = useState();
  const { data, loading } = useQuery(VIEW_CAUSES);
  if (loading) return <div>Loading</div>
  return (
    <div>
    <Layout pageTitle="Unidos mx - Crowdfunding">
      <Header
        btnClass="main-nav__btn"
        extraClassName="site-header-one__fixed-top"
        isLogin={isAuthenticated()}
      />

      <Banner />
      <Services />
      <BlogHome causes={[data]} />
      <FunFact />
      <Team />
      <VideoOne />
      <Faq />
      <Contact />
      <CTAThree />
      <Footer />
    </Layout>
  </div>
  );  
};

export default HomePage;
