import React from 'react';
import { Link } from 'gatsby';
import github from '../img/github-icon.svg';
import logo from '../img/logo.jpg';

const Navbar = class extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			active: false,
			navBarActiveClass: ''
		};
	}

	toggleHamburger = () => {
		// toggle the active boolean in the state
		this.setState(
			{
				active: !this.state.active
			},
			// after state has been updated,
			() => {
				// set the class in state for the navbar accordingly
				this.state.active
					? this.setState({
							navBarActiveClass: 'is-active'
						})
					: this.setState({
							navBarActiveClass: ''
						});
			}
		);
	};

	render() {
		return (
			<nav className="navbar is-transparent" role="navigation" aria-label="main-navigation">
				<div className="container">
					<div className="navbar-brand">
						<Link to="/" className="navbar-item" title="Logo">
							<img
								src="http://thedoorsurgeon.co.uk/files/3213/3379/2460/door_surgeon_logo.png"
								alt="the door surgeon"
								style={{ width: '288px', maxHeight: 'auto', height: 'auto' }}
							/>
						</Link>
						{/* Hamburger menu */}
						<div
							className={`navbar-burger burger ${this.state.navBarActiveClass}`}
							data-target="navMenu"
							onClick={() => this.toggleHamburger()}
						>
							<span />
							<span />
							<span />
						</div>
					</div>
					<div id="navMenu" className={`navbar-menu ${this.state.navBarActiveClass}`}>
						<div className="navbar-start has-text-centered">
							<Link className="navbar-item" to="/about">
								About
							</Link>
							<Link className="navbar-item" to="/services">
								Services
							</Link>
							<Link className="navbar-item" to="/blog">
								Blog
							</Link>
							<Link className="navbar-item" to="/contact">
								Contact
							</Link>
						</div>
						<div className="navbar-end has-text-centered" />
					</div>
				</div>
			</nav>
		);
	}
};

export default Navbar;
