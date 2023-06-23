import { Container, Row, Col } from "react-bootstrap";
import './about.css';

function About() {
    return (
        <Container className="big-container">
            <Row className="justify-content-md-center row-custom" md={7}>
                <Col className="align-items-center" sm={6}>
                    <h2>Acerca de</h2>
                </Col>
                <Col className="align-items-center" sm={6}>
                    <p>
                        Este sitio también te permitirá crear espacios con los próximos lugares de comida a visitar
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default About;