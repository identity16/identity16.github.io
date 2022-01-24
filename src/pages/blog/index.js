import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../../components/layout";
import {
    postList,
    postItem,
    featuredImage,
    infoContainer,
    category,
    title,
    description,
    date,
} from "./list.module.css";
import Img from "gatsby-image";

function BlogPage({ data: { allMdx } }) {
    return (
        <Layout pageTitle="Blog Posts" className={postList}>
            {allMdx.nodes.map((node) => (
                <article key={node.id} className={postItem}>
                    <Link to={`/blog/${node.id}`}>
                        {node.frontmatter.featuredImage && (
                            <Img
                                className={featuredImage}
                                fluid={
                                    node.frontmatter.featuredImage
                                        .childImageSharp.fluid
                                }
                            />
                        )}
                        <div className={infoContainer}>
                            {node.frontmatter.category && (
                                <span to="/" className={category}>
                                    {node.frontmatter.category}
                                </span>
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
        allMdx(sort: { fields: frontmatter___date, order: DESC }) {
            nodes {
                id
                frontmatter {
                    title
                    description
                    date
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
    }
`;
export default BlogPage;
