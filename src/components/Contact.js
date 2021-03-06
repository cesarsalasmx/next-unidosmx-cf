import React from "react";
import BlockTitle from "./BlockTitle";
import ContactBgShape from "../assets/images/shapes/contact-bg-shape-1-1.png";
import ContactImage from "../assets/images/resources/contact-1-1.jpg";
import Image from 'next/image';

const Contact = () => {
  return (
    <section className="contact-one" id="Contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <form className="contact-form-validated contact-one__form">
              <BlockTitle
                textAlign="left"
                paraText="Contáctanos"
                titleText={`¿Tienes alguna duda?\nEscríbenos`}
              />
              <div className="row">
                <div className="col-lg-6">
                  <input type="text" placeholder="Nombre" name="name" />
                </div>
                <div className="col-lg-6">
                  <input type="text" placeholder="Correo electrónico" name="email" />
                </div>
                <div className="col-lg-6">
                  <input type="text" placeholder="Asunto" name="subject" />
                </div>
                <div className="col-lg-6">
                  <input type="text" placeholder="Teléfono" name="phone" />
                </div>
                <div className="col-lg-12">
                  <textarea
                    placeholder="Escribe tu mensaje"
                    name="message"
                  ></textarea>
                </div>
                <div className="col-lg-12 text-left">
                  <button type="submit" className="thm-btn contact-one__btn">
                    <span>Enviar</span>
                  </button>
                </div>
              </div>
            </form>
            <div className="result"></div>
          </div>
          <div
            className="col-lg-5 d-flex wow fadeInRight"
            data-wow-duration="1500ms"
          >
            <div className="my-auto">
              <div className="contact-one__image">
                <Image src={ContactImage} alt="awesome post" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
