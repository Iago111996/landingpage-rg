import { Bar, Card, Container, Title, WrapperContainer } from "./styles";

export function Services() {
  return (
    <WrapperContainer id="service">
      <Title>Servicios</Title>
      <Bar />

      <Container>
        <Card>
          <img src="./assets/pintura.jpg" alt="Pintura." />

          <p>Hacemos todo de pinturas.</p>
        </Card>
        <Card>
          <img src="./assets/pladur.jpg" alt="Instalacion de pladur." />

          <p>Trabajamos con instalaciones de pladur.</p>
        </Card>
        <Card>
          <img src="./assets/eletricista.jpg" alt="Eletricista." />

          <p>Estamos qualificados para hacer tus instalaciones eletricas.</p>
        </Card>
      </Container>
    </WrapperContainer>
  );
}
