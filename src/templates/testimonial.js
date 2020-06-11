import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { HTMLContent } from "../components/Content"

export const TestimonialPageTemplate = ({ content, contentComponent }) => {
    const Content = contentComponent
    return <Content content={content} />
}

TestimonialPageTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    contentComponent: PropTypes.func,
}

const TestimonialPage = ({ data }) => {
    const { markdownRemark: post } = data

    return (
        <Layout>
            <div className="container">
                <TestimonialPageTemplate
                    contentComponent={HTMLContent}
                    title={post.frontmatter.title}
                    content={post.html}
                />
            </div>
        </Layout>
    )
}

TestimonialPage.propTypes = {
    data: PropTypes.object.isRequired,
}

export default TestimonialPage

export const testimonialPageQuery = graphql`
    query TestimonialPage($id: String!) {
        markdownRemark(id: { eq: $id }) {
            html
            frontmatter {
                sections {
                    section {
                        description
                        heading
                        image {
                            childImageSharp {
                                fluid(maxWidth: 420, quality: 100) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`
