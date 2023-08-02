import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
	const [loggedIn, setLoggedIn] = useState(false);
	const onlineStatus = useOnlineStatus();

	const { loggedInUser } = useContext(UserContext);
	// console.log(loggedInUser);

	// subscribing to the store using a selector
	const cartItems = useSelector((store) => store.cart.items);
	// console.log(cartItems);

	return (
		<div className="header flex justify-between">
			<div className="logo-container">
				<img className="w-56" src={LOGO_URL} />
			</div>
			<div className="nav-items flex items-center">
				<ul className="flex p-4 m-4">
					<li className="px-4">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
					<li className="px-4">
						<Link to="/">Home</Link>
					</li>
					<li className="px-4">
						<Link to="/about">About Us</Link>
					</li>
					<li className="px-4">
						<Link to="/contact">Contact Us</Link>
					</li>
					<li className="px-4">
						<Link to="/grocery">Grocery</Link>
					</li>
					<li className="px-4">
						<Link to="/cart">Cart ({cartItems.length} items)</Link>
					</li>
					<button className="login" onClick={() => setLoggedIn(!loggedIn)}>
						{loggedIn ? "Logout" : "Login"}
					</button>
					<li className="px-4 font-bold">{loggedInUser}</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;
