import React from "react";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";
//Components
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import MobileMenu from "../../components/MobileMenu";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";
import BlogSidebar from "../../components/BlogSidebar";
//Assets
import BlogDetailsImage from "../../assets/images/causas/Reforesta.png";
import AuthorImage from "../../assets/images/blog/author-1-1.jpg";

const BlogPostPage = () => {
  const { query: { slug } } = useRouter();
  const query = gql`
  query view_causes{
    PostQuery(slug:'${slug}'){
      id,
      title,
      content,
      image,
      author,
      date,
    }
  }
`; 
  const { data, loading } = useQuery(query);
  console.log(data);
  if (loading) return <div>Loading</div>
  return (
    <Layout pageTitle="UnidosMX - Crowdfunding">
    <Header btnClass="main-nav__btn-two" />
    <MobileMenu />
    <PageHeader pageHeading={data.PostQuery.title} />

    <section className="blog-details">
      <Container>
        <Row>
          <Col lg={8} xs={12}>
            <div>
                <div className="blog-details__main">
                    <div className="blog-details__image">
                    <Image src={BlogDetailsImage} alt="awesome post" />
                    </div>
                    <div className="blog-details__content">
                    <div className="blog-one__meta">
                        <Link href="/blog/other">
                          <a><i className="far fa-clock"></i> {data.PostQuery.date}</a>
                        </Link>
                        <Link href="/blog">
                          <a><i className="far fa-comments"></i> 2 comments</a>
                        </Link>
                    </div>
                    <h2>{data.PostQuery.title}</h2>
                    <div dangerouslySetInnerHTML={{ __html: data.PostQuery.content }} />
                    </div>
                    <div className="blog-details__meta">
                    </div>
                </div>
                <div className="blog-author">
                    <div className="blog-author__image">
                    <Image src={AuthorImage} alt="awesome post" />
                    </div>
                    <div className="blog-author__content">
                    <h3>Christine Eve </h3>
                    <p>
                        Encargado de proyecto "Reforesta Cancún".
                    </p>
                    </div>
                </div>
                <div className="comment-form">
                    <h3 className="comment-one__block-title">Contactar al encargado de proyecto</h3>
                    <form className="contact-form-validated contact-one__form">
                    <div className="row">
                        <div className="col-lg-6">
                        <input type="text" placeholder="Nombre" name="name" />
                        </div>
                        <div className="col-lg-6">
                        <input type="text" placeholder="Correo Electrónico" name="email" />
                        </div>
                        <div className="col-lg-12">
                        <input type="text" placeholder="Asunto" name="subject" />
                        </div>
                        <div className="col-lg-12">
                        <textarea placeholder="Mensaje" name="message"></textarea>
                        </div>
                        <div className="col-lg-12 text-left">
                        <button type="submit" className="thm-btn contact-one__btn">
                            <span>Enviar mensaje</span>
                        </button>
                        </div>
                    </div>
                    </form>
                </div>
                </div>
          </Col>
          <Col lg={4}>
            <BlogSidebar />
          </Col>
        </Row>
      </Container>
    </section>

    <Footer />
  </Layout>
  )
};

export default BlogPostPage;
