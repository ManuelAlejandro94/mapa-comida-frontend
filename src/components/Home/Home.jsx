import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import '../../css/App.css';
import './home.css';
import MapLandingPage from "../Maps/MapLandingPage";
import { Helmet } from "react-helmet";
import About from "../About/Abouts";
import LetrasNeon from "../LetrasNeon/LetrasNeon";

const TITLE = 'Inicio';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>
            <Container fluid="md">
                <Row className="neonRow">
                    <Col sm={12}>
                        <LetrasNeon texto={"Mapa comida"} />
                    </Col>
                </Row>
                <Row>
                    <About />
                </Row>
                <Row className="row-map">
                    <MapLandingPage />
                </Row>
            </Container>
        </>
    )
}

export default Home