import React from "react";
import './FormRegister.css';
import { Button, Card, Col, Form, Row } from "react-bootstrap";

const FormRegister = () => {
    return (
        <div className="col-md-12">
            <Row>
                <Col md={8} className="mx-auto">
                    <Card className="rounded-5" border="danger">
                        <Card.Header>
                            <h3 className="mb-0 text-center">Haz tu registro por primera vez</h3>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title className="text-center">Todos los campos son obligatorios</Card.Title>
                            <Form className="bg-white text-danger-emphasis">
                                <Row className="mb-3 pt-3">
                                    <label htmlFor="nombre" className="col-sm-3 col-form-label ps-4">Nombres</label>
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
                                <Row className="mb-3">
                                    <Button variant="secondary" type="submit" size="sm" className="float-center" id="btnRegister">Registrarse</Button>
                                </Row>
                            </Form>
                        </Card.Body>
                        <Card.Footer className="text-muted text-center">Clic en el botón cuando estés seguro de la información</Card.Footer>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default FormRegister;