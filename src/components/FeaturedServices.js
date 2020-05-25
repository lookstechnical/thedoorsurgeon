const FeaturesServices = ({ posts }) => {
	return (
		<div className="columns">
			<div className="column">
				<img src="" />
				<div>here</div>
			</div>
		</div>
	);
};

export default () => (
	<StaticQuery
		query={graphql`
			query FeaturedServicesQuery {
				allMarkdownRemark(
					sort: { order: DESC, fields: [frontmatter___date] }
					filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
				) {
					edges {
						node {
							excerpt(pruneLength: 400)
							id
							fields {
								slug
							}
							frontmatter {
								title
								templateKey
								featuredservice
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
