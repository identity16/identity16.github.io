import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../../components/layout";
import {
    container,
    titleContainer,
    title,
    date,
    category,
    featuredImage,
    content,
} from "./post.module.css";
import Img from "gatsby-image";

function BlogPost({ data: { markdownRemark: md } }) {
    return (
        <Layout pageTitle={md.frontmatter.title} className={container}>
            <div className={titleContainer}>
                <Link to={"/"} className={category}>
                    {md.frontmatter.category}
                </Link>
                <h1 className={title}>{md.frontmatter.title}</h1>
                <p className={date}>{md.frontmatter.date}</p>
            </div>
            {md.frontmatter.featuredImage && (
                <Img
                    className={featuredImage}
                    fluid={md.frontmatter.featuredImage.childImageSharp.fluid}
                />
            )}

            <div
                className={content}
                dangerouslySetInnerHTML={{ __html: md.html }}
            ></div>
        </Layout>
    );
}

export const query = graphql`
    query ($id: String) {
        markdownRemark(id: { eq: $id }) {
            html
            frontmatter {
                title
                date
                description
                category
                featuredImage {
                    childImageSharp {
                        fluid(maxWidth: 800) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`;

export default BlogPost;
