import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';

const ServiceList = ({ data: { allMarkdownRemark: { edges } } }) => {
	return (
		<div className="columns has-text-left">
			{edges &&
				edges.map(({ node: service }) => (
					<article key={service.id} className="column is-4">
						<Link to={service.fields.slug}>
							<PreviewCompatibleImage
								imageInfo={{
									image: service.frontmatter.featuredimage,
									alt: `featured image thumbnail for post ${service.frontmatter.title}`
								}}
							/>
							<div className="brand-green u-p-4">
								<h3>{service.frontmatter.title}</h3>
								{service.excerpt}
							</div>
						</Link>
					</article>
				))}
		</div>
	);
};

export default () => (
	<StaticQuery
		query={graphql`
			query ListServicesQuery {
				allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "service-type" } } }) {
					edges {
						node {
							id
							excerpt(pruneLength: 200)
							fields {
								slug
							}
							frontmatter {
								title
								featuredimage {
									childImageSharp {
										fluid(maxWidth: 120, quality: 100) {
											...GatsbyImageSharpFluid
										}
									}
								}
							}
						}
					}
				}
			}
		`}
		render={(data, count) => <ServiceList data={data} count={count} />}
	/>
);
