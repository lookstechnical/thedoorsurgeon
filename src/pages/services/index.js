import React from 'react';

import Layout from '../../components/Layout';
import ServiceList from '../../components/ServiceList';

export default class ServiceIndexPage extends React.Component {
	render() {
		return (
			<Layout>
				<header className="has-text-centered">
					<h1 className="has-text-weight-bold is-size-2">Our Services</h1>
				</header>
				<section className="section">
					<div className="container">
						<div className="content">
							<ServiceList />
						</div>
					</div>
				</section>
			</Layout>
		);
	}
}
