import React from 'react';
import Container from 'react-bootstrap/Container';
import '../css/App.css';
import { ListGroup } from 'react-bootstrap';

function Footer() {
    return(
        <Container>
            <ListGroup className='container-center' as={"ul"} horizontal>
                <ListGroup.Item as={"li"}>Facebook</ListGroup.Item>
                <ListGroup.Item as={"li"}>Instagram</ListGroup.Item>
                <ListGroup.Item as={"li"}>TikTok</ListGroup.Item>
            </ListGroup>
        </Container>
    );
}

export default Footer;