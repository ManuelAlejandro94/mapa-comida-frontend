import React from "react";
import './FormRegister.css';
import { Col, Form, Row } from "react-bootstrap";

const FormRegister = () => {
    return (
        <div className="md-8 justify-content-center">
            <Form className="bg-white text-danger-emphasis">
                <Row className="mb-3 pt-3">
                    <label htmlFor="nombre" className="col-sm-3 col-form-label ps-4">Nombre Completo</label>
                    <Col sm={8}>
                        <input type="text" className="form-control" id="inputNombre" />
                    </Col>
                </Row>
                <Row className="mb-3">
                    <label htmlFor="apellidos" className="col-sm-3 col-form-label ps-4">Apellidos</label>
                    <Col sm={8}>
                        <input type="text" className="form-control" id="inputApellidos" />
                    </Col>
                </Row>
                <Row className="mb-3">
                    <label htmlFor="email" className="col-sm-3 col-form-lablel ps-4">Email</label>
                    <Col sm={8}>
                        <input type="email" className="form-control" id="inputEmail" />
                    </Col>
                </Row>
                <Row className="mb-3">
                    <label htmlFor="usuario" className="col-sm-3 col-form-lablel ps-4">Usuario</label>
                    <Col sm={8}>
                        <input type="text" className="form-control" id="inputUsuario" />
                    </Col>
                </Row>
                <Row className="mb-3">
                    <label htmlFor="contraseña" className="col-sm-3 col-form-lablel ps-4">Contraseña</label>
                    <Col sm={8}>
                        <input type="password" className="form-control" id="inputContraseña" />
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default FormRegister;