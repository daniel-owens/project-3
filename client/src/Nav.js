import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

class Nav extends Component {
	render() {
		return (	
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
			  <div className="navbar-brand" to="/">
			    <p className="logo-text">Staatsbürgerkunde</p>
			  </div>
			</nav>  
		);	
	}	
}

export default Nav;