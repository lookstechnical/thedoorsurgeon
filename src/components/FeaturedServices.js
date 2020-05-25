import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';

const FeaturesServices = ({ data: { allMarkdownRemark: { edges } } }) => {
	return (
		<div className="featured-home  has-text-left">
			{edges &&
				edges.map(({ node: service }) => (
					<article key={service.id} className="featured-service is-4">
						<Link to={service.fields.slug}>
							<PreviewCompatibleImage
								imageInfo={{
									image: service.frontmatter.featuredimage,
									alt: `featured image thumbnail for post ${service.frontmatter.title}`
								}}
							/>
							<section className="section brand-green has-text-white">
								<h3 className="has-text-weight-bold is-size-5">{service.frontmatter.title}</h3>
								<p>{service.excerpt}</p>
							</section>
						</Link>
					</article>
				))}
		</div>
	);
};

export default () => (
	<StaticQuery
		query={graphql`
			query FeaturedServicesQuery {
				allMarkdownRemark(
					filter: { frontmatter: { templateKey: { eq: "service-type" }, featuredservice: { eq: true } } }
				) {
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
		render={(data, count) => <FeaturesServices data={data} count={count} />}
	/>
);
