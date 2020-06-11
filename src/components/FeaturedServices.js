import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import PreviewCompatibleImage from "./PreviewCompatibleImage"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import BackgroundImage from "gatsby-background-image"
import Content, { HTMLContent } from "../components/Content"

const FeaturedService = ({ service }) => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 })

    return (
        <motion.article
            ref={ref}
            key={service.id}
            className="featured-service is-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 2 }}
        >
            <Link to={service.fields.slug}>
                <div className="picture">
                    <BackgroundImage
                        className="featured-service-image"
                        fluid={
                            service.frontmatter.featuredimage.childImageSharp
                                .fluid
                        }
                        backgroundColor={`#040e18`}
                    />
                </div>
                <section className="section brand-green">
                    <h3 className="has-text-weight-bold is-size-5">
                        {service.frontmatter.title}
                    </h3>
                    <HTMLContent content={service.html} />
                </section>
            </Link>
        </motion.article>
    )
}

const FeaturesServices = ({
    data: {
        allMarkdownRemark: { edges },
    },
}) => {
    return (
        <div className="featured-home  has-text-left">
            {edges &&
                edges.map(({ node: service }) => (
                    <FeaturedService service={service} />
                ))}
        </div>
    )
}

export default () => (
    <StaticQuery
        query={graphql`
            query FeaturedServicesQuery {
                allMarkdownRemark(
                    filter: {
                        frontmatter: {
                            templateKey: { eq: "service-type" }
                            featuredservice: { eq: true }
                        }
                    }
                    sort: { order: ASC, fields: [] }
                ) {
                    edges {
                        node {
                            id
                            html
                            excerpt(pruneLength: 400)
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
)
