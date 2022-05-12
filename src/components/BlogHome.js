import React, { useState } from "react";
import { Container, Row } from "reactstrap";
import BlockTitle from "./BlockTitle";
import BlogPost from "./BlogPost";

const BlogHome = (props) => {
  //const {causes, setCauses} = useState();
  const {causes} = props
  console.log(causes[0])
  return (
    <section className="blog-one" id="actividades">
      <Container>
        <BlockTitle
          textAlign="center"
          paraText="Actividades"
          titleText={`Causas sociales de \nla comunidad`}
        />
        <Row>
          {causes[0].AllPostsQuery.map((data) => {
            return(
              <BlogPost
                postImage={`/uploads/${data.image}`}
                postTitle={data.title}
                postDate={data.date}
                postLink={`/causas/${data.slug}`}
                key={data.id}
              />
            );
          })}
          
        </Row>
      </Container>
    </section>
  );
};

export default BlogHome;
