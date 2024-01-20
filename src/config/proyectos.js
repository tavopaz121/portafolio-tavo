import tucanteach from "../assets/images/tucanteach.webp";
import curpGenerator from "../assets/images/curpGenerator.webp";
import apiRest from "../assets/images/apiRest.webp";
import todoApp from "../assets/images/todoApp.webp";

export const proyectos = [
  {
    name: "Tucanteach | App",
    desc: "Plataforma web educativa para niños",
    image: tucanteach,
    github: "https://github.com/tavopaz12/TucanTeach_APPV1.0",
    web: "https://tucanteach.ml",
    tecnologias: ['Sass', 'JavaScript', 'NodeJs', 'Git', 'React']
  },
  {
    name: "Curp | Generador",
    desc: "Generador de clave curp realizado con JavaScript Vanila",
    image: curpGenerator,
    github: "https://github.com/tavopaz12/curp-generador",
    web: "https://tavopaz12.github.io/curp-generador",
    tecnologias: ['JavaScript', 'Css', 'Git']
  },
  {
    name: "API REST | Tucanteach",
    desc: "API para guardar y obtener informacion para la plataforma tucanteach",
    image: apiRest,
    github: "https://github.com/tavopaz12/API_V1_Tucanteach",
    web: "https://tavopaz12.ml/api/v1/cursos",
    tecnologias: ['Sql', 'Express', 'NodeJs', 'Postgres', 'Docker']
  },

  {
    name: "Todo App",
    desc: "Aplicacion de tareas con JavaScript Vanilla",
    image: todoApp,
    github: "https://github.com/tavopaz12/alura-todoApp",
    web: "https://tavo-blog.gq",
    tecnologias: ['JavaScript', 'Figma', 'Css', 'Git', 'Html']
  },
];
