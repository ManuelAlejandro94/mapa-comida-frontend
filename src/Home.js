import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './css/App.css';

const Home = () => {
    return (
        <Container fluid="md">
            <Row>
                <Col sm={4}>
                    <h1 className="text-centered">Home Page</h1>
                </Col>
            </Row>
        </Container>
    )
}

export default Home