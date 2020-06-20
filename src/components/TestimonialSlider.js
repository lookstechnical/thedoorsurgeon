import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Slider from "react-slick"

const TestimonialSlider = ({ testimonials }) => {
    console.log(testimonials)

    return (
        <Slider
            infinite
            slidesToShow={1}
            slidesToScroll={1}
            arrows={false}
            autoplay={true}
            fade={true}
        >
            {testimonials.length > 0 &&
                testimonials.map((t) => (
                    <article>
                        <div className="columns is-centered">
                            <div className="column has-text-centered is-5">
                                {t.node.frontmatter.source[0] === "yell" && (
                                    <img
                                        className="testimonial-image"
                                        src="https://www.yell.com/img/yell_icon_256x256.png"
                                    />
                                )}
                                {t.node.frontmatter.source[0] === "google" && (
                                    <img
                                        className="testimonial-image"
                                        src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/082014/logo-google-plus.png?itok=CVCDRYmu"
                                    />
                                )}
                                <div
                                    className="is-size-5"
                                    dangerouslySetInnerHTML={{
                                        __html: t.node.html,
                                    }}
                                />
                                <span className="is-size-6 is-italic">
                                    {t.node.frontmatter.name}
                                </span>
                            </div>
                        </div>
                    </article>
                ))}
        </Slider>
    )
}

export default () => (
    <StaticQuery
        query={graphql`
            query TestimonialsQuery {
                allMarkdownRemark(
                    filter: {
                        frontmatter: { templateKey: { eq: "testimonial" } }
                    }
                ) {
                    edges {
                        node {
                            id
                            html
                            frontmatter {
                                name
                                source
                            }
                        }
                    }
                }
            }
        `}
        render={(data, count) => (
            <TestimonialSlider testimonials={data.allMarkdownRemark.edges} />
        )}
    />
)
