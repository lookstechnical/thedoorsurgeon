import React from 'react';

import Layout from '../../components/Layout';

export default class ServiceIndexPage extends React.Component {
	render() {
		return (
			<Layout>
				<header className="has-text-centered">
					<h1 className="has-text-weight-bold is-size-2">Our Services</h1>
				</header>
				<section className="section">
					<div className="container">
						<div className="content">list of services</div>
					</div>
				</section>
			</Layout>
		);
	}
}
