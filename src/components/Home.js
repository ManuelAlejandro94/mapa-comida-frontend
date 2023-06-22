import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/App.css';
import HeaderNav from "./Header";
import MapLandingPage from "./Maps/MapLandingPage";
import Footer from "./Footer";

const Home = () => {
    return (
        <div className="bg-purple-nu">
            <HeaderNav />
            <Container  fluid="md">
                <Row>
                    <Col sm={12}>
                        <h1 className="text-centered">Home Page</h1>
                    </Col>
                </Row>
                <Row>
                    <MapLandingPage />
                </Row>
                <Row>
                    <Footer />
                </Row>
            </Container>
        </div>
    )
}

export default Home