import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import '../../css/App.css';
import './home.css';
import HeaderNav from "../Header/Header";
import MapLandingPage from "../Maps/MapLandingPage";
import Footer from "../Footer/Footer";
import { Helmet } from "react-helmet";
import About from "../About/Abouts";

const TITLE = 'Inicio';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>
            <div className="bg-purple-nu">
                <HeaderNav />
                <Container  fluid="md">
                    <Row className="neonRow">
                        <Col sm={12}>
                            <h1 className="text-centered neonText">Mapa comida</h1>
                        </Col>
                    </Row>
                    <Row>
                        <About />
                    </Row>
                    <Row className="row-map">
                        <MapLandingPage />
                    </Row>
                    <Row>
                        <Footer />
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Home