import Card from "./Card";
import { proyectos } from "../config/proyectos";

import "../styles/Proyects/Proyects.scss";

export default function Proyects() {
  return (
    <section className="projects">
      <h2 className="title">Proyectos</h2>

      <div className="cards__container">
        {proyectos.map(({ name, desc, image, github, web, tecnologias }) => (
          <Card
            key={name}
            title={name}
            desc={desc}
            image={image}
            githubLink={github}
            webLink={web}
            tecnologias={tecnologias}
          />
        ))}
      </div>
    </section>
  );
}
