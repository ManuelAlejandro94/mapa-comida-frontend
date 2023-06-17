import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './css/App.css';
import HeaderNav from "./Header";
import MapLandingPage from "./components/Maps/MapLandingPage";

const Home = () => {
    return (
        <div className="bg-purple">
            <HeaderNav />
            <Container  fluid="md">
                <Row>
                    <Col sm={8}>
                        <h1 className="text-centered">Home Page</h1>
                    </Col>
                </Row>
                <Row>
                    <MapLandingPage />
                </Row>
            </Container>
        </div>
    )
}

export default Home