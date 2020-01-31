import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Contacts } from "../component/contacts";
import { Link } from "react-router-dom";

export const Home = () => {
	return (
		<div>
			<form className="form">
				<div className="form-group">
					<label>Full Name</label>
					<input type="fullname" className="form-control" placeholder="Full Name" />
				</div>
				<div className="form-group">
					<label>Email address</label>
					<input type="email" className="form-control" placeholder="Email" />
				</div>
				<div className="form-group">
					<label>Phone</label>
					<input className="form-control" placeholder="Phone" />
				</div>
				<div className="form-group">
					<label>Address</label>
					<input className="form-control" placeholder="Address" />
				</div>
				<button type="submit" className="savebtn btn-info btn-lg btn-block">
					Save
				</button>
			</form>
			<Link to="/contacts">Go to Contacts Page</Link>
		</div>
	);
};
