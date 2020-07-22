import React from "react";

function NavBar() {
	return (
		<nav className="navbar nav-color shadow p-0 px-4 fixed-top">
			<a
				className="navbar-brand text-light text-center font-weight-bolder px-4 py-4 mx-0 color-custom col-lg-3 col-md-12"
				href="#"
			>
				Yadira Tamarit
			</a>
			<ul className="nav nav-style col-md-12 col-lg-3">
				<li className="nav-item col-4">
					<a className="nav-link color-custom-text text-center" href="#">
						About
					</a>
				</li>
				<li className="nav-item col-4">
					<a
						className="nav-link color-custom-text text-center"
						href="portfolio.html"
					>
						Portfolio
					</a>
				</li>
				<li className="nav-item col-4">
					<a
						className="nav-link color-custom-text text-center"
						href="contact.html"
					>
						Contact
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default NavBar;
