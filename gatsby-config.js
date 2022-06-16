require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})
const path = require(`path`)
module.exports = {
    siteMetadata: {
        siteTitle: "Good2Grow Gardens",
        siteTitleDefault: "Good2Grow Gardens",
        siteUrl: process.env.URL,
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
            resolve: "gatsby-source-shopify",
            options: {
                password: process.env.SHOPIFY_SHOP_PASSWORD,
                storeUrl: process.env.GATSBY_SHOPIFY_STORE_URL,
                shopifyConnections: ["collections"],
            },
        },

        {
            resolve: "gatsby-plugin-sitemap",
            options: {
                query: `
        {
          allSitePage {
            nodes {
              path
            }
          }
          allWpContentNode(filter: {nodeType: {in: ["Post", "Page"]}}) {
            nodes {
              ... on WpPost {
                uri
                modifiedGmt
              }
              ... on WpPage {
                uri
                modifiedGmt
              }
            }
          }
        }
      `,
                resolveSiteUrl: () => process.env.URL,
                resolvePages: ({
                                   allSitePage: { nodes: allPages },
                                   allWpContentNode: { nodes: allWpNodes },
                               }) => {
                    const wpNodeMap = allWpNodes.reduce((acc, node) => {
                        const { uri } = node
                        acc[uri] = node

                        return acc
                    }, {})

                    return allPages.map(page => {
                        return { ...page, ...wpNodeMap[page.path] }
                    })
                },
                serialize: ({ path, modifiedGmt }) => {
                    return {
                        url: path,
                        lastmod: modifiedGmt,
                    }
                },
            },
        },

        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-gatsby-cloud",
        "gatsby-plugin-gatsby-cloud",
        // Add your Google Analytics ID to the .env file to enable
        // Otherwise, this plugin can be removed
        process.env.GOOGLE_ANALYTICS_ID && {
            resolve: "gatsby-plugin-google-analytics",
            options: {
                trackingId: process.env.GOOGLE_ANALYTICS_ID,
            },
        },
    ].filter(Boolean),
}
