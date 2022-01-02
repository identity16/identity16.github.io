import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../../components/layout";
import {
    postList,
    postItem,
    thumbnail,
    infoContainer,
    category,
    title,
    description,
    date,
} from "./list.module.css";
import Img from "gatsby-image";

function BlogPage({ data: { allMarkdownRemark } }) {
    return (
        <Layout pageTitle="Blog Posts" className={postList}>
            {allMarkdownRemark.nodes.map((node) => (
                <article key={node.id} className={postItem}>
                    <Link to={`/blog/${node.id}`}>
                        {node.frontmatter.featuredImage && (
                            <Img
                                className={thumbnail}
                                fluid={
                                    node.frontmatter.featuredImage
                                        .childImageSharp.fluid
                                }
                            />
                        )}
                        <div className={infoContainer}>
                            {node.frontmatter.category && (
                                <Link to={null} className={category}>
                                    {node.frontmatter.category}
                                </Link>
                            )}
                            <h2 className={title}>{node.frontmatter.title}</h2>
                            {node.frontmatter.description && (
                                <p className={description}>
                                    {node.frontmatter.description}
                                </p>
                            )}
                            <p className={date}>{node.frontmatter.date}</p>
                        </div>
                    </Link>
                </article>
            ))}
        </Layout>
    );
}

export const query = graphql`
    query {
        allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
            nodes {
                id
                frontmatter {
                    title
                    description
                    date
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
    }
`;
export default BlogPage;
