/** @format */

import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav>
			<div className="navlogo">
				<h1>Blocklab</h1>
			</div>
			<div className="navlinks">
				<Link to="/">News</Link>
				<Link to="/article">Articles</Link>
				<Link to="/research">Research</Link>
				<Link to="/trend">Trends</Link>
			</div>
			<div className="navbtn">
				<Link to="/contact">Contact</Link>
			</div>
		</nav>
	);
};
export default Navbar;
