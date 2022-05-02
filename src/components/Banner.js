import React from "react";
import Image from "next/image";
import Link from "next/link";
import BannerBG from "../assets/images/resources/banner-image-1-1.jpg";
import BannerMoc from "../assets/images/unidosmx-home-banner.png";

const Banner = () => {
  return (
    <section className="banner-one" id="home">
      <div
        className="banner-one__bg"
        style={{ backgroundImage: `url(${BannerBG})` }}
      ></div>
      <div className="container">
        
        <div className="banner-one__moc">
          <Image
            src={BannerMoc}
            className="wow fadeInUp"
            data-wow-duration="1500ms"
            alt="awesome post"
          />
        </div>
        <div className="row">
          <div className="col-lg-7">
            <div className="banner-one__content">
              <div className="mc-form__response"></div>
              <h3>
                Proyecto Unidos <br /> apoyando  <br /> cuasas sociales
              </h3>
              <Link href="#actividades">
                <a className="banner-one__btn thm-btn "><span>Comienza ahora</span></a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Banner;