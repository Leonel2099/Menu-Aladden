import React from "react";
import Figure from "react-bootstrap/Figure";
import { Card } from "react-bootstrap";
import "../TabViewAbout/TabViewAbout.css";

const TabViewAbout = () => {
  return (
    <div className="d-flex flex-column align-items-center m-3">
      <section className="m-3">
        <Card className="d-flex flex-row cardAboutView">
          <img className="imgAboutView" src="https://i.ibb.co/phYxf4F/about1.jpg" />

          <p className="text-white p-2 m-0">
            Bienvenidos a Aladden: Un Viaje a los Sabores Árabes En Aladden, nos enorgullecemos de ofrecer una
            experiencia gastronómica única que te transportará a un viaje a través de los sabores y aromas cautivadores
            del Medio Oriente. Nuestro restaurante es un tributo a la rica y ancestral tradición culinaria árabe, que se
            remonta a siglos de historia y cultura.
          </p>
        </Card>
      </section>
      <section className="m-3">
        <Card className="d-flex flex-row cardAboutView">
          <p className="text-white  p-2 m-0">
            Nuestro equipo de talentosos chefs y expertos en gastronomía árabe se esfuerza por presentar platos que
            destacan la frescura de los ingredientes locales y las auténticas especias que hacen que la cocina árabe sea
            tan especial.
          </p>
          <img className="imgAboutView" src="https://i.ibb.co/TKnbxcZ/about2.jpg" />
        </Card>
      </section>
    </div>
  );
};

export default TabViewAbout;
