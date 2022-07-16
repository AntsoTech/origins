import React from "react";
import "./footer.css";

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer__infos">
				<img
					src="https://upload.wikimedia.org/wikipedia/fr/thumb/6/65/Football_Portugal_federation.svg/1200px-Football_Portugal_federation.svg.png"
					alt="Logo"
					width="24px"
					height="32px"
				/>
				<ul className="footer__infos__legal">
					<li> Privacy </li>
					<div className="footer__infos__legal__line"></div>
					<li> Terms and conditions</li>
					<div className="footer__infos__legal__line"></div>
					<li> Cookie policy</li>
				</ul>
				<p>Powered by Antso</p>
			</div>
			<div className="footer__social">
				<img
					src="../assets/insta.svg"
					alt="instagram"
					width="25px"
					height="25px"
				/>
				<img
					src="../assets/linkedin.svg"
					alt="linkedin"
					width="25px"
					height="25px"
				/>
				<img
					src="../assets/github.svg"
					alt="github"
					width="25px"
					height="25px"
				/>
			</div>
		</div>
	);
};

export default Footer;
