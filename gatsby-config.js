require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
    siteMetadata: {
        siteUrl: "https://identity16.github.io/blog/",
        title: "identity16",
    },
    plugins: [
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `blog`,
                path: `${__dirname}/posts`,
            },
        },
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-plugin-mdx",
            extensions: [`.md`, `.mdx`],
            options: {
                gatsbyRemarkPlugins: ["gatsby-remark-line-breaks"],
            },
        },
        {
            resolve: "gatsby-plugin-feed",
            options: {
                query: `
                  {
                    site {
                      siteMetadata {
                        title
                        description
                        siteUrl
                        site_url: siteUrl
                      }
                    }
                  }
                `,
                feeds: [
                    {
                        serialize: ({ query: { site, allMdx } }) => {
                            return allMdx.edges.map((edge) => {
                                return Object.assign(
                                    {},
                                    edge.node.frontmatter,
                                    {
                                        description:
                                            edge.node.frontmatter.description,
                                        date: edge.node.frontmatter.date,
                                        url:
                                            site.siteMetadata.siteUrl +
                                            "/" +
                                            edge.node.id,
                                        guid:
                                            site.siteMetadata.siteUrl +
                                            "/" +
                                            edge.node.id,
                                    }
                                );
                            });
                        },
                        query: `
                        {
                            allMdx(sort: { order: DESC, fields: [frontmatter___date] },) {
                                edges {
                                    node {
                                        id
                                        frontmatter {
                                            title
                                            description
                                            date
                                        }
                                    }
                                }
                            }
                        }
                        `,
                        output: "/rss.xml",
                        title: "identity16's BLOG",
                    },
                ],
            },
        },
    ],
};
