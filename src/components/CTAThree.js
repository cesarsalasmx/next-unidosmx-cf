import React from "react";
import { Container } from "reactstrap";
import Link from "next/link";

const CTAThree = () => {
  return (
    <section className="cta-three">
      <Container className="text-center">
        <h3>
          Síguenos en nuestras redes sociales<br />y mira lo que estamos haciendo
        </h3>
        
        <div className="cta-three__btn-wrap align-items-center justify-content-md-center justify-content-sm-center">
                <div className="footer-widget">
                  <div className="footer-widget__social">
                    <Link href="#none">
                      <a><i className="fab fa-facebook-square"></i></a>
                    </Link>
                    <Link href="#none">
                      <a><i className="fab fa-twitter"></i></a>
                    </Link>
                    <Link href="#none">
                      <a><i className="fab fa-instagram"></i></a>
                    </Link>
                    <Link href="#none">
                      <a><i className="fab fa-pinterest-p"></i></a>
                    </Link>
                  </div>
                </div>
              </div>
      </Container>
    </section>
  );
};

export default CTAThree;
