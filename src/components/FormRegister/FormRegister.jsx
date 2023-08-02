import {React, useState } from "react";
import './FormRegister.css';
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";

const messages = {
    req: "Este campo es obligatorio",
    nombres_apellidos: "El formato introducido no es el correcto",
    mail: "Introduce una diracción correcta",
    long_minima: "Debe de contener al menos 8 caracteres",
    long_maxima: "Ha pasado la longitud máxima"
};

const patterns = {
    nombres_apellidos: /^[A-Za-z]+$/i,
    email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
};

function FormRegister() {

    const [userInfo, setUserInfo] = useState({
        nombre: "",
        apellidos: "",
        email: "",
        usuario: "",
        contraseña: ""
    })
    
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm();

    const onSubmit = (userInfo) => console.log(userInfo);
    console.log(errors);

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
                            <Form className="bg-white text-danger-emphasis" onSubmit={handleSubmit(onSubmit)}>
                                <Row className="mb-3 pt-3">
                                    <label htmlFor="nombre" className="col-sm-3 col-form-label ps-4">Nombres</label>
                                    <Col sm={8}>
                                        <input type="text" className="form-control" id="inputNombre"
                                            {...register("nombre", { required: messages.req,
                                                                    pattern: {
                                                                        value: patterns.nombres_apellidos,
                                                                        message: messages.nombres_apellidos
                                                                    } })} />
                                        {errors.nombre && <p>{errors.nombre.message}</p>}
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <label htmlFor="apellidos" className="col-sm-3 col-form-label ps-4">Apellidos</label>
                                    <Col sm={8}>
                                        <input type="text" className="form-control" id="inputApellidos"
                                            {...register("apellidos", { required: messages.req,
                                                                        pattern: {
                                                                            value: patterns.nombres_apellidos,
                                                                            message: messages.nombres_apellidos
                                                                        } })} />
                                            {errors.apellidos && <p>{errors.apellidos.message}</p>}
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <label htmlFor="email" className="col-sm-3 col-form-lablel ps-4">Email</label>
                                    <Col sm={8}>
                                        <input type="email" className="form-control" id="inputEmail" 
                                            {...register("email", { required: messages.req,
                                                                    pattern: {
                                                                        value: patterns.email,
                                                                        message: messages.mail
                                                                    } })}/>
                                        {errors.email && errors.email.message}
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <label htmlFor="usuario" className="col-sm-3 col-form-lablel ps-4">Usuario</label>
                                    <Col sm={8}>
                                        <input type="text" className="form-control" id="inputUsuario"
                                            {...register("usuario", { required: messages.req,
                                                                    maxLength: {
                                                                        value: 16,
                                                                        message: messages.long_maxima
                                                                    } })} />
                                            {errors.usuario && <p>{errors.usuario.message}</p>}
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <label htmlFor="contraseña" className="col-sm-3 col-form-lablel ps-4">Contraseña</label>
                                    <Col sm={8}>
                                        <input type="password" className="form-control" id="inputContraseña"
                                            {...register("contraseña", { required: messages.req,
                                                                        maxLength: {
                                                                            value: 32,
                                                                            message: messages.long_maxima
                                                                        },
                                                                        minLength: {
                                                                            value: 8,
                                                                            message: messages.long_minima
                                                                        } })} />
                                            {errors.contraseña && <p>{errors.contraseña.message}</p>}
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