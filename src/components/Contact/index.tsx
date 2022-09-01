import {
  Bar,
  Container,
  Left,
  Rigth,
  Title,
  Wrapper,
  WrapperContainer,
} from "./styles";

import { FiPhone, FiMail } from "react-icons/fi";

import emailjs from "@emailjs/browser";

export function Contact() {
  function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_enm05sn",
        "template_q44aj8n",
        e.target as HTMLFormElement,
        "R77o26dEcJGonbptr"
      )
      .then((res) => {
        alert("El email fue enviado!");
      })
      .catch((error) => alert("su email no pudo ser enviado!"));
  }

  return (
    <WrapperContainer id="contact">
      <Container>
        <Title>Contacto</Title>
        <Bar />

        <form onSubmit={(e) => sendEmail(e)}>
          <input type="text" placeholder="Nombre" name="user_name" required />
          <input type="email" placeholder="Email" name="user_email" required />
          <input
            type="text"
            placeholder="Mensaje"
            name="user_message"
            required
          />

          <button>Contáctenos</button>
        </form>

        <Wrapper>
          <Left>
            <h1>Carrer del Pintor Navarro Llorens, 25, 46008 València</h1>

            <h2>
              <FiPhone size={16} style={{ marginRight: 8}} />
              +34 612 56 77 46
            </h2>
            <h2>
              <FiMail size={16} style={{ marginRight: 8}} />
              carpiteriasahiren@gmail.com
            </h2>
          </Left>

          <Rigth>
            <img src="./assets/map.png" alt="imagene de mapa." />
          </Rigth>
        </Wrapper>
      </Container>
    </WrapperContainer>
  );
}
