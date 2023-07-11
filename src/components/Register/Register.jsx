import React from "react";
import './register.css';
import '../../css/App.css';
import LetrasNeon from "../LetrasNeon/LetrasNeon";
import { Row, Col, Container } from "react-bootstrap";
import FormRegister from "../FormRegister/FormRegister";

const Register = () => {
    return (
        <>
            <Container className="container-screen">
                <Row className="neonRow">
                    <Col sm={12}>
                        <LetrasNeon texto={"Registrarse"} />
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <FormRegister />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Register;