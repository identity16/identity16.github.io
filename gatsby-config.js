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
    ],
};
