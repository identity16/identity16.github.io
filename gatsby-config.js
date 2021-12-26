require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
    siteMetadata: {
        siteUrl: "https://identity16.github.io",
        title: "identity16",
    },
    plugins: [
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `blog`,
                path: `${__dirname}/blog`,
            },
        },
        "gatsby-plugin-mdx",
        {
            resolve: `gatsby-source-strapi`,
            options: {
                apiURL: process.env.GATSBY_API_URL,
                queryLimit: 1000, // Defaults to 100
                collectionTypes: [`articles`, `categories`],
            },
        },
    ],
};
