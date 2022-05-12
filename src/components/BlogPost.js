import React from "react";
import Link from 'next/link'
import { Col } from "reactstrap";
import Image from 'next/image'
const BlogPost = (props) => {
  return (
    <Col lg={4} md={6} sm={12}>
      <div className="blog-one__single">
        <div className="blog-one__image">
          <Link href={props.postLink}>
            <a>
              <Image src={props.postImage} className="causes-img-home" alt="awesome post" height={400} width={400}/>
            </a>
          </Link>
        </div>
        <div className="blog-one__content">
          <div className="blog-one__circle"></div>
          <div className="blog-one__content-inner">
            <div className="blog-one__meta">
                <i className="far fa-clock"></i> {props.postDate}
            </div>
            <h3>
              <Link href={props.postLink}><a>{props.postTitle}</a></Link>
            </h3>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default BlogPost;
