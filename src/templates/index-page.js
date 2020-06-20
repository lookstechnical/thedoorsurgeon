import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import door from "../img/door.jpg"
import FeaturedServices from "../components/FeaturedServices"
import TestimonialSlider from "../components/TestimonialSlider"

export const IndexPageTemplate = ({
    image,
    title,
    heading,
    subheading,
    mainpitch,
    description,
    intro,
}) => (
    <div>
        <section
            className="section"
            style={{
                backgroundImage: `url(${door})`,
                backgroundPosition: "center center",
                backgroundSize: "cover",
                padding: "180px 0px 180px 0px",
                transition:
                    "background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;",
            }}
        >
            <div className="has-text-white" style={{ padding: "50px" }}>
                <h1 className="is-size-1 has-text-weight-bold">
                    Door and window specialists
                </h1>
                <h2 className="is-size-3 has-text-weight-bold">
                    West Yorkshire
                </h2>
            </div>
        </section>
        <section className="section  has-text-centered">
            <header className="mb-l">
                <p className="is-light-heading is-uppercase is-size-5">
                    Commerical or Residential
                </p>
                <h2 className="is-size-2 has-text-weight-bold">
                    What services do we provide?
                </h2>
            </header>
            <FeaturedServices />
        </section>
        <section className="section dark areas">
            <section className="section locksmith columns">
                <div>
                    <p className="is-light-heading is-uppercase is-size-5">
                        Locked out?
                    </p>
                    <h3 className="is-size-2 has-text-weight-bold">
                        24 hour Locksmith service
                    </h3>
                    <p>Available throughout West Yorkshire.</p>
                    <Link to="/services/24-hour-locksmith/">Find out more</Link>
                </div>
                <div>
                    <a
                        href="tel:07912 294 111"
                        className="button is-large is-danger"
                    >
                        Call Now: 07912 294 111
                    </a>
                </div>
            </section>
        </section>
        <section className="section has-text-centered">
            <div>
                <p className="is-light-heading is-uppercase is-size-5">
                    Testimonials
                </p>
                <h3 className="is-size-2 has-text-weight-bold">
                    View our customers feedback
                </h3>
                <div className="mt-5">
                    <TestimonialSlider />
                </div>
            </div>
        </section>
        <section className="section dark">
            <div>
                <h3 className="is-size-2 has-text-weight-bold">Get in touch</h3>
            </div>
        </section>
    </div>
)

IndexPageTemplate.propTypes = {
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    title: PropTypes.string,
    heading: PropTypes.string,
    subheading: PropTypes.string,
    mainpitch: PropTypes.object,
    description: PropTypes.string,
    intro: PropTypes.shape({
        blurbs: PropTypes.array,
    }),
}

const IndexPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark

    return (
        <Layout>
            <IndexPageTemplate
                image={frontmatter.image}
                title={frontmatter.title}
                heading={frontmatter.heading}
                subheading={frontmatter.subheading}
                mainpitch={frontmatter.mainpitch}
                description={frontmatter.description}
                intro={frontmatter.intro}
            />
        </Layout>
    )
}

IndexPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
}

export default IndexPage

export const pageQuery = graphql`
    query IndexPageTemplate {
        markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
            frontmatter {
                title
                heading
                subheading
                mainpitch {
                    title
                    description
                }
                description
            }
        }
    }
`
