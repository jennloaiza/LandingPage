import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Start Bootstrap</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-dark">Home</button>
				</Link>
				<Link to="/demo">
					<button className="btn btn-dark">About</button>
				</Link>
				<Link to="/demo">
					<button className="btn btn-dark">Services</button>
				</Link>
				<Link to="/demo">
					<button className="btn btn-dark">Contact</button>
				</Link>
			</div>
		</nav>
	);
};
