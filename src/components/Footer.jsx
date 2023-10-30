import Logout from "./Logout";
import { Container, Row, Col } from "react-bootstrap";
export default function Footer({ setCounter }) {
  return (
    <Container>
      <Row>
        <Col xs={6}>
          <a href="https://www.google.com">Google</a>
          <a href="https://www.facebook.com">Facebook</a>
          <a href="https://www.twitter.com">Twitter</a>
        </Col>
        <Col xs={6}>
          <Logout setCounter={setCounter} />
        </Col>
      </Row>
    </Container>
  );
}
