import linkedin from "../assets/icons/linkedin-50.png";
import github from "../assets/icons/github-50.png";
import instagram from "../assets/icons/instagram-50.png";

import "../styles/Footer/Footer.scss";

const redesSociales = [
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/tavopaz12/",
    image: linkedin,
  },
  { name: "GitHub", link: "https://github.com/tavopaz12", image: github },
  {
    name: "Instagram",
    link: "https://www.instagram.com/tavopaz_12/",
    image: instagram,
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="follow">
        <p>Sígueme en:</p>
        {redesSociales.map((redSocial) => (
          <a
            href={redSocial.link}
            target="_blank"
            rel="noreferrer"
            key={redSocial.name}
          >
            <img
              sizes="(max-width: 320px) 280px, (max-width: 480px) 440px, 800px"
              src={redSocial.image}
              alt="linkedin"
            />
          </a>
        ))}
      </div>
      <div className="desc">
        <blockquote>
          Programar es una mezcla de arte y ciencia, donde la creatividad se
          encuentra con la lógica para dar vida a soluciones innovadoras.
        </blockquote>
      </div>
    </footer>
  );
}
