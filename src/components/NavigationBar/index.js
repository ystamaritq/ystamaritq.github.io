import React from "react";
import { Nav, Navbar, Image, NavDropdown } from "react-bootstrap";
import "./style.css";
import logo from "./logo.png";

const NavigationBar = () => {
	return (
		<Navbar shadow="lg" expand="lg" className="custom-style-nav py-0">
			<Navbar.Brand href="/">
				<Image src={logo} className="custom-img" />
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="navbar-nav" />
			<Navbar.Collapse>
				<Nav className="ml-auto color-link">
					<Nav.Link className="hover-color" href="/">
						About
					</Nav.Link>
					<Nav.Link className="hover-color" href="/portfolio">
						Portfolio
					</Nav.Link>
					<Nav.Link className="hover-color" href="/contact">
						Contact
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavigationBar;
