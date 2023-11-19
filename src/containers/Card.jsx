import "../styles/Proyects/Card.scss";

export default function Card({
  title,
  desc,
  image,
  githubLink,
  webLink,
  tecnologias,
}) {
  return (
    <div className="card__proyect">
      <div className="card__image">
        <a rel="noopener noreferrer" href={webLink} target="_blank">
          <img
            sizes="(max-width: 320px) 280px, (max-width: 480px) 440px, 800px"
            loading="lazy"
            src={image}
            alt="imagen"
            className="card__image"
          />
        </a>
      </div>

      <div className="card__info">
        <div className="info">
          <p className="title__proyect">{title}</p>
          <span className="desc">{desc}</span>

          <div className="tecnologys">
            {tecnologias?.map((tecnologia) => (
              <div className="container" key={tecnologia}>
                <p>{tecnologia}</p>
              </div>
            ))}
          </div>

          <div className="links">
            <a
              rel="noopener noreferrer"
              href={webLink}
              target="_blank"
              className="view__demo"
            >
              Ver Demo
            </a>

            <a
              rel="noopener noreferrer"
              href={githubLink}
              target="_blank"
              className="view__code"
            >
              Ver Codigo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
