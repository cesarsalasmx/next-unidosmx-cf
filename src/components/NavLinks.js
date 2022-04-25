import React from "react";
import Link from 'next/link';
import { Link as ScrollLink } from "react-scroll";

const NavLinks = () => {

  return (
    <ul className="main-nav__navigation-box">
      <li>
        <Link href="/"><a>Inicio</a></Link>
      </li>
      <li>
        <ScrollLink
          activeClass="current"
          to="features"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Apoyo
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass="current"
          to="actividades"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Actividades
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass="current"
          to="team"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Nosotros MX
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass="current"
          to="faqs"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          FAQs
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass="current"
          to="Contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Contacto
        </ScrollLink>
      </li>
    </ul>
  );
};

export default NavLinks;
