import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Layout from "../components/layout";

function BlogPage() {
    const posts = useStaticQuery(graphql`
        query {
            allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
                nodes {
                    name
                }
            }
        }
    `);

    return (
        <Layout pageTitle="Blog Posts">
            <ul>
                {posts.allFile.nodes.map((node) => (
                    <li key={node.name}>{node.name}</li>
                ))}
            </ul>
        </Layout>
    );
}

export default BlogPage;
