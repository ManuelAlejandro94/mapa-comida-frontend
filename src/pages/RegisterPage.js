import React from "react";
import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet";
import Register from "../components/Register/Register";

const TITLE = "Registrarse";

const RegisterPage = () => {
    return (
        <>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>
            <Container fluid="md">
                <Register /> 
            </Container>
        </>
    )
}

export default RegisterPage;