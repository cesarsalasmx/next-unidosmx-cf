import React from "react";
import { Container } from "reactstrap";
import { Row } from "reactstrap";
import { Col } from "reactstrap";
import Layout from "../components/Layout";
import Header from "../components/Header";
import MobileMenu from "../components/MobileMenu";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import BlogSidebar from "../components/BlogSidebar";
import BlogSingle from "../components/BlogSingle";

const BlogPostPage = () => (
  <Layout pageTitle="UnidosMX - Crowdfunding">
    <Header btnClass="main-nav__btn-two" />
    <MobileMenu />
    <PageHeader pageHeading="Soy futuro" />

    <section className="blog-details">
      <Container>
        <Row>
          <Col lg={8} xs={12}>
            <BlogSingle />
          </Col>
          <Col lg={4}>
            <BlogSidebar />
          </Col>
        </Row>
      </Container>
    </section>

    <Footer />
  </Layout>
);

export default BlogPostPage;
