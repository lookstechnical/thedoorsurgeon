import React from 'react';
import { Link } from 'gatsby';

import logo from '../img/logo.svg';
import facebook from '../img/social/facebook.svg';
import instagram from '../img/social/instagram.svg';
import twitter from '../img/social/twitter.svg';
import vimeo from '../img/social/vimeo.svg';

const Footer = class extends React.Component {
	render() {
		return (
			<footer className="footer brand-green">
				<div className="content brand-green has-text-centered">
					<div className="container  has-text-white-ter">
						<div style={{ maxWidth: '100vw' }} className="columns">
							<div className="column is-8">
								<section className="menu">
									<ul className="menu-list">
										<li>
											<Link to="/" className="footer-link">
												Home
											</Link>
										</li>
										<li>
											<Link className="footer-link" to="/about">
												About
											</Link>
										</li>
										<li>
											<Link className="footer-link" to="/products">
												Products
											</Link>
										</li>
									</ul>
								</section>
							</div>
							<div className="column is-4 social">
								<a title="facebook" href="https://www.facebook.com/The-door-surgeon-364962176914907/">
									<img src={facebook} alt="Facebook" style={{ width: '1em', height: '1em' }} />
								</a>
								<a title="twitter" href="https://twitter.com/thedoorsurgeon">
									<img
										className="fas fa-lg"
										src={twitter}
										alt="Twitter"
										style={{ width: '1em', height: '1em' }}
									/>
								</a>
								<a title="instagram" href="https://instagram.com">
									<img src={instagram} alt="Instagram" style={{ width: '1em', height: '1em' }} />
								</a>
								<a title="vimeo" href="https://vimeo.com">
									<img src={vimeo} alt="Vimeo" style={{ width: '1em', height: '1em' }} />
								</a>
							</div>
						</div>
					</div>
				</div>
			</footer>
		);
	}
};

export default Footer;
