import React from "react";
import HeaderNav from "../components/Header/Header";
import '../css/App.css'
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import { Row } from 'react-bootstrap';

function Layout() {
    return (
        <div className='bg-purple-nu'>
            <HeaderNav />
            <Row className="g-0"><Outlet /></Row>
            <Row className="g-0"><Footer /></Row>            
        </div>
    );
}

export default Layout;