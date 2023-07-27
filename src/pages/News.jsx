/** @format */

import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const News = () => {
	return (
		<div className="wrapper">
			<Navbar />
			<div className="newsheader">
				<h1>Welcome To Blocklab</h1>
				<p>
					BlockZone Insights is a trailblazing technology company committed to
					transforming the way knowledge is shared and consumed in the digital
					era. With its focus on user-centric features and cutting-edge
					technology, BlockZone Insights empowers users to discover, create, and
					interact with articles like never before.
				</p>
				<Link to={"/article"}>Read article</Link>
			</div>
		</div>
	);
};

export default News;
