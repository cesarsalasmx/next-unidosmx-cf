import React from "react";
import BlockTitle from "./BlockTitle";
import Link from "next/link";
import Image from 'next/image';
import proyecto1 from "../assets/images/icons/limpieza-de-playas.png";
import proyecto2 from "../assets/images/icons/reforestacion.png";
import CTAImage1 from "../assets/images/resources/cta-2-moc-1.png";
import CTAImage2 from "../assets/images/resources/cta-2-moc-2.png";
import CTAImage3 from "../assets/images/resources/cta-2-moc-3.png";

const CTATwo = () => {
  return (
    <section className="cta-two">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="cta-two__content">
              <BlockTitle
                textAlign="left"
                paraText="Mira nuestros resultados"
                titleText={`Estos son los resultados\nde los proyectos que \nhas apoyado`}
              />
              <div className="cta-two__icon-wrap">
                <div className="cta-two__icon-single">
                  <div className="cta-two__icon">
                  <Image
                src={proyecto1}
                className="proyectoIcon"
                data-wow-duration="1500ms"
                alt="awesome post"
              />
                  </div>
                  <h3>
                    Responsive <br /> Design
                  </h3>
                </div>
                <div className="cta-two__icon-single">
                  <div className="cta-two__icon">
                  <Image
                src={proyecto2}
                className="proyectoIcon"
                data-wow-duration="1500ms"
                alt="awesome post"
              />
                  </div>
                  <h3>
                    Online <br /> Marketing
                  </h3>
                </div>
              </div>
              <div className="cta-two__text">
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Lorem Ipsum is simply
                  dummy text of the printing laborum perspiciatis unde.
                </p>
              </div>
              <Link href="#none">
                <a className="thm-btn cta-two__btn"><span>Descubrir más</span></a>
              </Link>
            </div>
          </div>
          <div className="col-lg-6 ">
            <div className="cta-two__images d-flex justify-content-end align-items-end flex-column">
              <Image
                src={CTAImage1}
                className="wow fadeInUp"
                data-wow-duration="1500ms"
                alt="awesome post"
              />
              <Image
                src={CTAImage2}
                className="wow fadeInUp"
                data-wow-duration="1500ms"
                alt="awesome post"
              />
              <Image
                src={CTAImage3}
                className="wow fadeInUp"
                data-wow-duration="1500ms"
                alt="awesome post"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTATwo;
