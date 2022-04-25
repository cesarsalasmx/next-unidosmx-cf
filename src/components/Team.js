import React from "react";
import BlockTitle from "./BlockTitle";
import Image from "next/image";
import Link from "next/link";
import TeamMemeber1 from "../assets/images/team/ana-lasa-proyecto-unidos-mx.jpg";
import TeamMemeber2 from "../assets/images/team/luis-duran-proyecto-unidos-mx.jpg";
import TeamMemeber3 from "../assets/images/team/natalia-vara-alonso-proyecto-unidos-mx.jpg";

const Team = () => {
  return (
    <section className="team-one" id="team">
      <div className="container">
        <BlockTitle
          textAlign="center"
          paraText="Nuestro equipo"
          titleText={`Conoce los miembros \nde nuestro equipo`}
        />
        <div className="row">
          <div className="col-lg-4 col-md-8 col-sm-12">
            <div className="team-one__single">
              <div className="team-one__circle"></div>
              <div className="team-one__inner">
                <h3>Ana Lasa</h3>
                <p>Vicepresidente Unidos MX</p>
                <div className="team-one__image">
                  <Image src={TeamMemeber1} alt="awesome post" className="team-image" />
                </div>
                <div className="team-one__social">
                  <Link href="#none">
                    <a><i className="fab fa-facebook-square"></i></a>
                  </Link>
                  <Link href="#none">
                    <a><i className="fab fa-twitter"></i></a>
                  </Link>
                  <Link href="#none">
                    <a><i className="fab fa-instagram"></i></a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-8 col-sm-12">
            <div className="team-one__single">
              <div className="team-one__circle"></div>
              <div className="team-one__inner">
                <h3>Luis Durán</h3>
                <p>Presidente Unidos MX</p>
                <div className="team-one__image">
                  <Image src={TeamMemeber2} alt="awesome post" className="team-image" />
                </div>
                <div className="team-one__social">
                  <Link href="#none">
                    <a><i className="fab fa-facebook-square"></i></a>
                  </Link>
                  <Link href="#none">
                    <a><i className="fab fa-twitter"></i></a>
                  </Link>
                  <Link href="#none">
                    <a><i className="fab fa-instagram"></i></a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-8 col-sm-12">
            <div className="team-one__single">
              <div className="team-one__circle"></div>
              <div className="team-one__inner">
                <h3>Natalia Vara Alonso</h3>
                <p>Directora de Comunidad Unidos MX</p>
                <div className="team-one__image">
                  <Image src={TeamMemeber3} alt="awesome post" className="team-image" />
                </div>
                <div className="team-one__social">
                  <Link href="#none">
                    <a><i className="fab fa-facebook-square"></i></a>
                  </Link>
                  <Link href="#none">
                    <a><i className="fab fa-twitter"></i></a>
                  </Link>
                  <Link href="#none">
                    <a><i className="fab fa-instagram"></i></a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
