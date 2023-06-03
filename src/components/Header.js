import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header = () => {

	const [loggedIn, setLoggedIn] = useState(false);

	return (
		<div className="header">
			<div className="logo-container">
				<img
					className="logo"
					src={LOGO_URL}
				/>
			</div>
			<div className="nav-items">
				<ul>
					<li>Home</li>
					<li>About Us</li>
					<li>Contact Us</li>
					<li>Cart</li>
					<button className="login" onClick={()=>setLoggedIn(!loggedIn)}>{loggedIn ? "Logout" : "Login"}</button>
				</ul>
			</div>
		</div>
	);
};

export default Header;