import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
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
} from "./blog.module.css";

function BlogPage({ data }) {
    console.log(data.allStrapiArticles.nodes[0]);
    return (
        <Layout pageTitle="Blog Posts" className={postList}>
            {data.allStrapiArticles.nodes.map((node) => (
                <article key={node.id} className={postItem}>
                    <Link to={`/blog/${node.slug}`}>
                        <GatsbyImage
                            className={thumbnail}
                            image={
                                node.image.localFile.childImageSharp
                                    .gatsbyImageData
                            }
                            alt={node.image.name}
                            width={268}
                            height={180}
                        />
                        <div className={infoContainer}>
                            <p className={category}>{node.category.name}</p>
                            <h2 className={title}>{node.title}</h2>
                            <p className={description}>{node.description}</p>
                            <p className={date}>Posted: {node.created_at}</p>
                        </div>
                    </Link>
                </article>
            ))}
        </Layout>
    );
}

export const query = graphql`
    query {
        allStrapiArticles(sort: { order: DESC, fields: created_at }) {
            nodes {
                description
                id
                image {
                    name
                    localFile {
                        childImageSharp {
                            gatsbyImageData
                        }
                    }
                }
                slug
                title
                created_at(formatString: "YYYY.MM.DD")
                category {
                    name
                    slug
                }
            }
        }
    }
`;
export default BlogPage;
