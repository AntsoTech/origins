import React from "react";
import "./navbar.css";

const Navbar = () => {
	return (
		<nav className="navbar">
			<img
				src="https://upload.wikimedia.org/wikipedia/fr/thumb/6/65/Football_Portugal_federation.svg/1200px-Football_Portugal_federation.svg.png"
				alt="Logo"
				width="24px"
				height="32px"
			/>
			<ul className="navbar__categories">
				<li> Funzone </li>
				<li> Testimoniales </li>
			</ul>
			<ul className="navbar__buttons">
				<img src="../assets/user.png" alt="user" width="20px" height="20px" />
				<img
					src="../assets/search.png"
					alt="search"
					width="20px"
					height="20px"
				/>
			</ul>
		</nav>
	);
};

export default Navbar;
