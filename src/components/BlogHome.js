import React, { useState } from "react";
import { Container, Row } from "reactstrap";
import BlockTitle from "./BlockTitle";
import BlogPost from "./BlogPost";

import causeImage3 from "../assets/images/causas/Reforesta.png";

const BlogHome = (props) => {
  //const {causes, setCauses} = useState();
  const {causes} = props
  return (
    <section className="blog-one" id="actividades">
      <Container>
        <BlockTitle
          textAlign="center"
          paraText="Actividades"
          titleText={`Causas sociales de \nla comunidad`}
        />
        <Row>
          {causes.AllPostsQuery.map((data) => {
            return(
              <BlogPost
                postImage={causeImage3}
                postTitle={data.title}
                postDate={data.date}
                postLink={`/causas/${data.slug}`}
                key={props.key}
              />
            );
          })}
          
        </Row>
      </Container>
    </section>
  );
};

export default BlogHome;
