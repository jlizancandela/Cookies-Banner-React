import "./cookies-consent.css";
import { useState } from "react";
export function Cokkies() {
  const cookies = localStorage.getItem("cookies");
  const [visible, setVisible] = useState(cookies ? false : true);
  const aceptar = () => {
    setVisible(false);
    localStorage.setItem("cookies", "aceptadas");
  };
  const denegar = () => {
    setVisible(false);
    localStorage.setItem("cookies", "denegadas");
  };
  return (
    <>
      <aside
        className={`marco-consentimiento ${visible ? "visible" : "oculto"}`}
      >
        <span>Consentimiento de cookies</span>
        <p>
          Este sitio web utiliza cookies para mejorar la experiencia del
          usuario. Por favor, acepta nuestras cookies para continuar navegando.
        </p>
        <section>
          <button onClick={aceptar}>Aceptar</button>
          <button onClick={denegar}>Denegar</button>
        </section>
      </aside>
    </>
  );
}
