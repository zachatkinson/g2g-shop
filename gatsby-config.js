require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})
const path = require(`path`)
module.exports = {
    siteMetadata: {
        siteTitle: "Good2Grow Gardens",
        siteTitleDefault: "Good2Grow Gardens",
        siteUrl: "https://good2growontario.com",
        hrefLang: "en",
        siteDescription:
            "The storefront for Good2Grow modular planters.",
        siteImage: "/default-og-image.jpg",
        twitter: "@good2growgardens",
    },
    flags: {
        FAST_DEV: true,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                // You can add multiple tracking ids and a pageview event will be fired for all of them.
                trackingIds: [
                    process.env.GOOGLE_ANALYTICS_ID, // Google Analytics / GA
                ],

                // This object is used for configuration specific to this plugin
                pluginConfig: {
                    // Puts tracking script in the head instead of the body
                    head: true,
                },
            },
        },
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-source-shopify",
            options: {
                password: process.env.SHOPIFY_SHOP_PASSWORD,
                storeUrl: process.env.GATSBY_SHOPIFY_STORE_URL,
                shopifyConnections: ["collections"],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `blog`,
                path: `${__dirname}/src/blog/`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images/`,
            },
        },
        "gatsby-transformer-remark",
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-plugin-mdx",
        "gatsby-transformer-sharp",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-gatsby-cloud",
        "gatsby-plugin-gatsby-cloud",

    ].filter(Boolean),
}
