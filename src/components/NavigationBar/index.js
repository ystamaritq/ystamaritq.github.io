import React from "react";
import { Nav, Navbar, Image, NavDropdown } from "react-bootstrap";
import "./style.css";
import logo from "./logo.png";

const NavigationBar = () => {
	return (
		<Navbar bg="light" shadow="lg" expand="lg">
			<Navbar.Brand href="/">
				<Image src={logo} className="custom-img" />
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="navbar-nav" />
			<Navbar.Collapse>
				<Nav className="ml-auto color-link">
					<Nav.Link href="#features">About</Nav.Link>
					<Nav.Link href="#pricing">Portfolio</Nav.Link>
					<Nav.Link href="#features">Contact</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavigationBar;
