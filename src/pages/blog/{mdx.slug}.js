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
    featuredImageAttribution,
    content,
} from "./post.module.css";
import { GatsbyImage } from "gatsby-plugin-image";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Comment from "../../components/comment";
import SEO from "../../components/seo";

function BlogPost({ data: { mdx } }) {
    return (
        <Layout pageTitle={mdx.frontmatter.title} className={container}>
            <SEO
                title={mdx.frontmatter.title}
                description={mdx.frontmatter.description}
                image={mdx.frontmatter.featuredImage.publicURL}
                article={true}
            />
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
            {mdx.frontmatter.featuredImageAttribution && (
                <p className={featuredImageAttribution}>
                    {mdx.frontmatter.featuredImageAttribution}
                </p>
            )}

            <div className={content}>
                <MDXRenderer localImages={mdx.frontmatter.embeddedImagesLocal}>
                    {mdx.body}
                </MDXRenderer>
            </div>
            <Comment />
        </Layout>
    );
}

export const query = graphql`
    query ($slug: String) {
        mdx(slug: { eq: $slug }) {
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
                    publicURL
                }
                featuredImageAttribution
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
