/** @format */

import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav>
			<div className="navlogo">
				<h1>Bloglab</h1>
			</div>
			<div className="navlinks">
				<Link to="/">Stories</Link>
				<Link to="/creator">Creator</Link>
				<Link to="/community">Community</Link>
				<Link to="/subscribe">Subscribe</Link>
			</div>
			<div className="navbtn">
				<Link to="/contact">Contact</Link>
			</div>
		</nav>
	);
};
export default Navbar;
