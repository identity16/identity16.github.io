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
    ],
};
