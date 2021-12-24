import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../../components/layout";

function BlogPage({ data }) {
    return (
        <Layout pageTitle="Blog Posts">
            {data.allMdx.nodes.map((node) => (
                <article key={node.id}>
                    <h2>
                        <Link to={`/blog/${node.slug}`}>
                            {node.frontmatter.title}
                        </Link>
                    </h2>
                    <p>Posted: {node.frontmatter.date}</p>
                </article>
            ))}
        </Layout>
    );
}

export const query = graphql`
    query {
        allMdx(sort: { fields: frontmatter___date, order: DESC }) {
            nodes {
                frontmatter {
                    date(formatString: "YYYY/MM/DD")
                    author
                    title
                }
                id
                slug
            }
        }
    }
`;
export default BlogPage;