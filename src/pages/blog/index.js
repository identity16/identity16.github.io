import { graphql } from "gatsby";
import React from "react";
import Layout from "../../components/layout";
import { postList } from "./list.module.css";

import PostItem from "../../components/post-item";

function BlogPage({ data: { allMdx } }) {
    return (
        <Layout pageTitle="Blog Posts" className={postList}>
            {allMdx.nodes.map((node) => (
                <PostItem key={node.slug} node={node} />
            ))}
        </Layout>
    );
}

export const query = graphql`
    query {
        allMdx(sort: { fields: frontmatter___date, order: DESC }) {
            nodes {
                slug
                frontmatter {
                    title
                    description
                    date
                    category
                    featuredImage {
                        childImageSharp {
                            gatsbyImageData(layout: CONSTRAINED)
                        }
                    }
                }
            }
        }
    }
`;
export default BlogPage;
