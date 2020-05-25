import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { HTMLContent } from '../components/Content';
import Section from '../components/Section';

export const ServiceTypeTemplate = ({ title, description, sections, helmet }) => {
	return (
		<div>
			<section className="section">
				{helmet || ''}
				<div className="container content has-text-centered">
					<div className="columns">
						<div className="column is-10 is-offset-1">
							<h1 className="title is-size-2 has-text-weight-bold is-bold-light">{title}</h1>
							<HTMLContent content={description} />
						</div>
					</div>
				</div>
			</section>
			<Section sections={sections} />
		</div>
	);
};

ServiceTypeTemplate.propTypes = {
	content: PropTypes.node.isRequired,
	contentComponent: PropTypes.func,
	description: PropTypes.string,
	title: PropTypes.string,
	helmet: PropTypes.object
};

const ServiceType = ({ data }) => {
	const { markdownRemark: post } = data;

	return (
		<Layout>
			<ServiceTypeTemplate
				content={post.html}
				contentComponent={HTMLContent}
				description={post.frontmatter.description}
				helmet={
					<Helmet titleTemplate="%s | Service">
						<title>{`${post.frontmatter.title}`}</title>
						<meta name="description" content={`${post.frontmatter.description}`} />
					</Helmet>
				}
				tags={post.frontmatter.tags}
				title={post.frontmatter.title}
				sections={post.frontmatter.sections}
			/>
		</Layout>
	);
};

ServiceType.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.object
	})
};

export default ServiceType;

export const pageQuery = graphql`
	query ServicePostByID($id: String!) {
		markdownRemark(id: { eq: $id }) {
			id
			html
			frontmatter {
				title
				category
				description
				sections {
					section {
						description
						heading
					}
				}
			}
		}
	}
`;
