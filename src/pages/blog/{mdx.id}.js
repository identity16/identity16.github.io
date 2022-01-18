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
import { GatsbyImage } from "gatsby-plugin-image";
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
                <GatsbyImage
                    className={featuredImage}
                    image={
                        mdx.frontmatter.featuredImage.childImageSharp
                            .gatsbyImageData
                    }
                    alt="Featured Image"
                />
            )}

            <div className={content}>
                <MDXRenderer localImages={mdx.frontmatter.embeddedImagesLocal}>
                    {mdx.body}
                </MDXRenderer>
            </div>
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
                        gatsbyImageData(layout: CONSTRAINED)
                    }
                }
                embeddedImagesLocal {
                    childImageSharp {
                        gatsbyImageData(height: 625, layout: CONSTRAINED)
                    }
                }
            }
        }
    }
`;

export default BlogPost;
