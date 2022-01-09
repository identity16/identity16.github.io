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
} from "./post.module.scss";
import Img from "gatsby-image";
import { MDXRenderer } from "gatsby-plugin-mdx";

function BlogPost({ data: { mdx } }) {
    return (
        <Layout pageTitle={mdx.frontmatter.title} className={container}>
            <div className={titleContainer}>
                <Link to={"/"} className={category}>
                    {mdx.frontmatter.category}
                </Link>
                <h1 className={title}>{mdx.frontmatter.title}</h1>
                <p className={date}>{mdx.frontmatter.date}</p>
            </div>
            {mdx.frontmatter.featuredImage && (
                <Img
                    className={featuredImage}
                    fluid={mdx.frontmatter.featuredImage.childImageSharp.fluid}
                />
            )}

            <MDXRenderer className={content}>{mdx.body}</MDXRenderer>
        </Layout>
    );
}

export const query = graphql`
    query ($id: String) {
        mdx(id: { eq: $id }) {
            body
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
