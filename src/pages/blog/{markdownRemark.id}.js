import { graphql } from "gatsby";
import React from "react";
import Layout from "../../components/layout";

function BlogPost({ data }) {
    return (
        <Layout pageTitle={data.markdownRemark.frontmatter.title}>
            <p>{data.markdownRemark.frontmatter.date}</p>
            <div
                dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
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
