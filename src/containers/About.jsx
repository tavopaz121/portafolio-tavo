import image from "../assets/images/foto-pro-tavo.png";

import "../styles/About/About.scss";

export default function About() {
  return (
    <section className="about">
      <h2 className="title">Sobre mi...</h2>

      <div className="about__card">
        <div className="image">
          <img
            sizes="(max-width: 320px) 280px, (max-width: 480px) 440px, 800px"
            src={image}
            alt="about"
            loading="lazy"
          />
        </div>
        <div className="biografia">
          <p>
            Soy un desarrollador frontend altamente especializado con más de 2
            años de experiencia en el uso de tecnologías como React.js,
            LitElement, JavaScript, HTML5 y CSS3 para crear soluciones de
            software innovadoras y de alta calidad. Mi enfoque se centra en
            diseñar interfaces de usuario atractivas y fáciles de usar que
            mejoren la experiencia del usuario.
          </p>
          <p>
            Un ejemplo de mi trabajo más reciente fue durante mis residencias
            profesionales, donde tuve la oportunidad de desarrollar una
            plataforma de e-learning desde cero, desde la ideación hasta la
            implementación, para asegurarme de que cada aspecto de la plataforma
            cumpliera con los requisitos y necesidades del cliente. Además,
            desarrollé la API utilizando tecnologías como Node.js, Express,
            Postgres y Docker, configuré el servidor de la aplicación para
            asegurar una comunicación fluida entre el front-end y la API.
            Gracias a mi experiencia técnica y dedicación, pudimos lanzar la
            plataforma de e-learning en tiempo y forma, lo que resultó en una
            tasa de adopción del 85% entre los estudiantes.
          </p>
          <p>
            Además de mi trabajo, disfruto de la música y el senderismo en mi
            tiempo libre. Me apasiona lo que hago y siempre me esfuerzo por
            estar al día con las últimas tendencias tecnológicas y mejorar mis
            habilidades y conocimientos en el campo. Si está buscando un
            desarrollador apasionado y comprometido para llevar su proyecto al
            siguiente nivel, no dude en ponerse en contacto conmigo
          </p>
        </div>
      </div>
    </section>
  );
}
