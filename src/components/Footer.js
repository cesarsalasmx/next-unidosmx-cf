import React from "react";
import Image from "next/image";
import Link from "next/link";
import FooterLogo from "../assets/images/unidos-mx-logo-pruple.png";

const Footer = () => {
  return (
    <div>
      
      <footer className="site-footer">
        <div className="site-footer__upper">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="footer-widget footer-widget__about">
                  <Link href="/">
                    <a><Image src={FooterLogo} width="129" height="60px" alt="awesome post" /></a>
                  </Link>
                 
                </div>
              </div>

              <div className="col-lg-5">
                <div className="footer-widget__links-wrap">
                  <div className="footer-widget">
                    <h3 className="footer-widget__title">Proyecto Unidos</h3>
                    <ul className="list-unstyled footer-widget__links-list">
                      <li>
                        <Link href="#none"><a>Sobre nosotros</a></Link>
                      </li>
                      <li>
                        <Link href="#none"><a>Nuestro equipo</a></Link>
                      </li>
                      <li>
                        <Link href="#none"><a>Contacto</a></Link>
                      </li>
                    </ul>
                  </div>
                  <div className="footer-widget">
                    <h3 className="footer-widget__title">Causas Sociales</h3>
                    <ul className="list-unstyled footer-widget__links-list">
                      <li>
                        <Link href="#none"><a>Medio ambiente</a></Link>
                      </li>
                      <li>
                        <Link href="#none"><a>Grupos vulnerables</a></Link>
                      </li>
                      <li>
                        <Link href="#none"><a>Recuperación de espacios</a></Link>
                      </li>
                      <li>
                        <Link href="#none"><a>Futuras generaciones</a></Link>
                      </li>
                    </ul>
                  </div>
                  
                </div>
              </div>
              <div className="col-lg-3 d-flex align-items-center justify-content-xl-end justify-content-lg-end justify-content-md-center justify-content-sm-center">
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
            </div>
          </div>
        </div>
        <div className="site-footer__bottom">
          <div className="container text-center">
            <p>© UnidosMX. 2022</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
