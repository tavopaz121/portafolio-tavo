import banner from "../assets/images/tavopaz12_dev.webp";

import whatsapp from "../assets/icons/whatsapp-50.png";
import github from "../assets/icons/github-50.png";
import instagram from "../assets/icons/instagram-50.png";

import "../styles/Home/index.scss";

const logos = [
  {
    name: "instagram",
    src: instagram,
    link: "https://www.instagram.com/tavopaz_12/",
  },
  { name: "github", src: github, link: "https://github.com/tavopaz12" },
  { name: "whatsapp", src: whatsapp, link: "https://wa.me/+522781205512" },
];

export default function Index() {
  return (
    <section className="home" id="home">
      <div className="description">
        <h2 className="description__title">
          José Octavio Paz,{" "}
          <span className="description__blue">Frontend Developer</span>.
        </h2>

        <p className="info">
          Soy una persona creativa y apasionada por la programación, ideando
          soluciones a problemas de forma sencilla, comprometido con el
          desarrollo de experiencias de usuario accesibles y de alto rendimiento
          web.
        </p>

        <div className="link__redes">
          <div className="redes">
            {logos.map((logo) => (
              <a
                key={logo.name}
                href={logo.link}
                target="_blank"
                className="logo__container"
                rel="noreferrer"
              >
                <img
                  srcSet=""
                  sizes="(max-width: 320px) 280px, (max-width: 480px) 440px, 800px"
                  loading="lazy"
                  src={logo.src}
                  alt={logo.name}
                />
              </a>
            ))}
          </div>
          <div className="contact__me__container">
            <a
              className="contact__me"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/tavopaz12/"
            >
              <p>Conecta conmigo</p>
            </a>
            <a
              className="buy__a__cooffe"
              target="_blank"
              rel="noreferrer"
              href="https://ko-fi.com/tavopaz12"
            >
              <p>Donar</p>
            </a>
          </div>
        </div>
      </div>

      <div className="image__profile">
        <div className="hero__shape">
          <img
            sizes="(max-width: 320px) 280px, (max-width: 480px) 440px, 800px"
            loading="lazy"
            src={banner}
            alt="banner"
            className="banner__profile image image__animated"
          />
        </div>
      </div>
    </section>
  );
}
