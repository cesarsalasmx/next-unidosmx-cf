import React from "react";
import { Container } from "reactstrap";
import BlockTitle from "./BlockTitle";
import AccordionItem from "./AccordionItem";
import faqBG from "../assets/images/shapes/faq-bg-1-1.png";
import Image from 'next/image';

const FAQ = () => {
  return (
    <section className="faq-one" id="faqs">
      <Container>
        <BlockTitle
          textAlign="center"
          paraText="Preguntas frecuentes"
          titleText={`Preguntanos algo sobre Unidos MX`}
        />
        <div className="accrodion-grp faq-accrodion">
          <AccordionItem
            title="¿Hay un mínimo de edad para ser voluntario?"
            content="No! Unidos MX es para todas las personas, si eres menor de edad es recomendable asistas con un adulto responsable de tí."
            status={false}
          />
          <AccordionItem
            title="¿Cuántos años lleva Unidos MX como organización?"
            content="Casi 4 años, nacimos el 24 de mayo de 2018."
            status={true}
          />
          <AccordionItem
            title="¿Puedo ser parte como empresa?"
            content="Claro! Tenemos diferentes paquetes para empresa donde buscamos retribuir de diferentes manera el que se preocupen y ocupen por su comunidad."
            status={false}
          />
          <AccordionItem
            title="¿Cuántas personas laboran en Unidos MX?"
            content="Actualmente tenemos un equipo directivo de 10 personas, 15 practicantes de servicio social y una comunidad de voluntarias y voluntarios increíble."
            status={false}
          />
        </div>
      </Container>
    </section>
  );
};

export default FAQ;
