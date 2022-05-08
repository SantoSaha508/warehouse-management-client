import React from 'react';
import './Header.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="/home">Dress Warehouse</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/inventoryItem">Inventory Item</Nav.Link>
                    <Nav.Link href="/pricing">Pricing</Nav.Link>
                    <Nav.Link href="/publicpricing">Pricing</Nav.Link>
                    <Nav.Link href="/blog">Blog</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/signup">Signup</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

    );
};

export default Header;