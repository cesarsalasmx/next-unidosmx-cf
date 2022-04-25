import React from "react";
import BlockTitle from "./BlockTitle";
import Image from "next/image";
import Link from "next/link";
import CtaMoc1 from "../assets/images/resources/cta-1-moc-1.png";

const CTAOne = () => {
  return (
    <section className="cta-one">
      <div className="container">
        <div className="cta-one__moc wow fadeInLeft" data-wow-duration="1500ms">
          <Image src={CtaMoc1} className="cta-one__moc-img" alt="awesome post" />
        </div>
        <div className="row justify-content-end">
          <div className="col-lg-6">
            <div className="cta-one__content">
              <BlockTitle
                textAlign="left"
                paraText="Publica tu proyecto"
                titleText={`Maneja las donaciones\ny mira como crece\ntu proyecto`}
              />
              <div className="cta-one__text">
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
              <ul className="list-unstyled cta-one__list">
                <li>
                  <i className="fa fa-check-circle"></i>
                  Refresing to get such a personal touch.
                </li>
                <li>
                  <i className="fa fa-check-circle"></i>
                  Duis aute irure dolor in reprehenderit in voluptate.
                </li>
                <li>
                  <i className="fa fa-check-circle"></i>
                  Velit esse cillum dolore eu fugiat nulla pariatur.
                </li>
              </ul>
              <Link href="#none">
                <a className="thm-btn cta-one__btn"><span>Publicar ahora</span></a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAOne;
