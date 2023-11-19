import About from "../containers/About";
import Contacto from "../containers/Contacto";
import Footer from "../containers/Footer";
import Header from "../containers/Header";
import Index from "../containers/Index";
import Proyects from "../containers/Proyects";
import Skills from "../containers/Skills";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Header />

      <Index />
      <div
        id="about"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-offset="50"
      >
        <About />
      </div>

      <div
        id="skills"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-offset="50"
      >
        <Skills />
      </div>

      <div
        id="projects"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-offset="50"
      >
        <Proyects />
      </div>

      <div
        id="contact"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-offset="50"
      >
        <Contacto />
      </div>

      <Footer />
    </>
  );
}
