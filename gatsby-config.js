require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
    siteMetadata: {
        siteUrl: "https://identity16.github.io",
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
        "gatsby-plugin-sitemap",
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
                                            "/blog/" +
                                            edge.node.slug,
                                        guid:
                                            site.siteMetadata.siteUrl +
                                            "/blog/" +
                                            edge.node.slug,
                                    }
                                );
                            });
                        },
                        query: `
                        {
                            allMdx(sort: { order: DESC, fields: [frontmatter___date] },) {
                                edges {
                                    node {
                                        slug
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
        {
            resolve: "gatsby-plugin-robots-txt",
            options: {
                policy: [
                    {
                        userAgent: "*",
                        allow: "/",
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                trackingIds: ["G-KT75JM7BL1"],
                // This object is used for configuration specific to this plugin
                pluginConfig: {
                    // Puts tracking script in the head instead of the body
                    head: false,
                    // Setting this parameter is also optional
                    respectDNT: true,
                },
            },
        },
    ],
};
