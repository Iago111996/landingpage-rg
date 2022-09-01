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
        "service_dnquz8a",
        "template_23hgkjs",
        e.target as HTMLFormElement,
        "SmMkdfKqcJx9p4NEC"
      )
      .then((res) => {
        alert("El email fue enviado!");
        // @ts-ignore: Unreachable code error
        e.target[0].value = "";
        // @ts-ignore: Unreachable code error
        e.target[1].value = "";
        // @ts-ignore: Unreachable code error
        e.target[2].value = "";
        // @ts-ignore: Unreachable code error
        e.target[3].value = "";
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
              reparacionesyreformas@gmail.com
            </h2>
          </Left>

          <Rigth>
            <img src="./assets/map.png" alt="Imagene de mapa." />
          </Rigth>
        </Wrapper>
      </Container>
    </WrapperContainer>
  );
}
