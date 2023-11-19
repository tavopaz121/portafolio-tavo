import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faXmarkCircle,
} from "@fortawesome/free-solid-svg-icons";

import "../styles/Contacto/Contacto.scss";

export default function Contacto() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [res, setRes] = useState({
    message: "",
    status: "",
  });

  const [loadind, setLoading] = useState("");

  const sendEmail = async (evt) => {
    evt.preventDefault();
    setLoading(true);

    const options = {
      method: "POST",
      body: JSON.stringify({ nombre, email, subject, message }),
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await fetch(
        "https://tavopaz12.ml/api/v1/mail/sendMail",
        options
      );
      const data = await res.json();

      setRes({
        message: data.message,
        status: 200,
      });
      setLoading(false);

      setNombre("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      setRes({
        message: "Error durante el envio, mensaje no enviado",
        status: 400,
      });
      setLoading(false);
    }

    setTimeout(() => {
      setRes({
        message: "",
        status: "",
      });
    }, 6000);
  };

  const validateInputEmpty = () => {
    return (
      nombre.trim() === "" ||
      email.trim() === "" ||
      subject.trim() === "" ||
      message.trim() === ""
    );
  };

  return (
    <section className="contact">
      <h2 className="title">Contáctame</h2>

      <p className="info">
        Estoy interesado en oportunidades independientes, especialmente
        proyectos ambiciosos o grandes. Sin embargo, si tiene otra solicitud o
        pregunta, no dude en utilizar el formulario.
      </p>

      <form action="" className="form" onSubmit={sendEmail}>
        {res.status === 200 && (
          <div className="alert success">
            <FontAwesomeIcon icon={faCheckCircle} />
            <p>{res.message}</p>
          </div>
        )}

        {res.status === 400 && (
          <div className="alert error">
            <FontAwesomeIcon icon={faXmarkCircle} />
            <p>{res.message}</p>
          </div>
        )}

        <div className="flex">
          <label htmlFor="">
            <input
              value={nombre}
              name="name"
              type="text"
              placeholder="Nombre"
              required
              onChange={(evt) => setNombre(evt.target.value)}
            />
          </label>

          <label htmlFor="">
            <input
              value={email}
              type="email"
              placeholder="Email"
              required
              onChange={(evt) => setEmail(evt.target.value)}
            />
          </label>
        </div>

        <label htmlFor="">
          <input
            value={subject}
            type="text"
            placeholder="Asunto"
            required
            onChange={(evt) => setSubject(evt.target.value)}
          />
        </label>

        <label htmlFor="">
          <textarea
            value={message}
            placeholder="Mensaje"
            name=""
            id=""
            rows="8"
            required
            onChange={(evt) => setMessage(evt.target.value)}
          ></textarea>
        </label>

        <div className="btn__container">
          <button
            className={validateInputEmpty() ? "btn btn__disabled" : "btn"}
          >
            {loadind ? "Enviando mensaje..." : "Enviar mensaje"}
          </button>
        </div>
      </form>
    </section>
  );
}
