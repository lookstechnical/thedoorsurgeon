import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Content, { HTMLContent } from "../components/Content"
import Sections from "../components/Section"

export const AboutPageTemplate = ({ content, contentComponent }) => {
    const Content = contentComponent
    return <Content content={content} />
}

AboutPageTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
    const { markdownRemark: post } = data

    return (
        <Layout>
            <div className="container">
                <AboutPageTemplate
                    contentComponent={HTMLContent}
                    title={post.frontmatter.title}
                    content={post.html}
                />
            </div>
        </Layout>
    )
}

AboutPage.propTypes = {
    data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
    query AboutPage($id: String!) {
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
