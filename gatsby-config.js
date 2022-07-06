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
        // {
        //     resolve: "gatsby-plugin-sitemap",
        //     options: {
        //         query:`
        //             {
        //                 site {
        //                     siteMetadata {
        //                         siteUrl
        //                     }
        //                 }
        //                 allMdx(sort: {fields: frontmatter___date, order: DESC}, filter: {slug: {glob: "!*wip*"}}) {
        //                     nodes {
        //                         frontmatter {
        //                             date(formatString: "YYYY-MM-DD")
        //                         }
        //                         slug
        //                     }
        //                 }
        //                 allSitePage {
        //                     nodes {
        //                         path
        //                     }
        //                 }
        //             }
        //         `,
        //         resolveSiteUrl: ({ site: { siteMetadata: { siteUrl } } }) => siteUrl,
        //         resolvePages: ({ allMdx: { nodes: mdxs }, allSitePage: {nodes: path}}) => {
        //             const pages = path.map(pagePath => {
        //                 return{
        //                     path: pagePath
        //                 }
        //             })
        //
        //             const posts = mdxs.map(mdx => {
        //                 return {
        //                     path: `/blog/${mdx.slug}`,
        //                     lastmod: mdx.frontmatter.date,
        //                 }
        //             })
        //             return [...posts, ...pages]
        //         },
        //         serialize: ({ path, lastmod}) => {
        //             return {
        //                 url: path,
        //                 lastmod: lastmod,
        //             }
        //         },
        //     }
        // },
        {
            resolve: "gatsby-plugin-sitemap",
            options: {
                output: "/"
            }
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                gatsbyRemarkPlugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1200,
                        },
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-purgecss`,
            options: {
                printRejected: true, // Print removed selectors and processed file names
                // develop: true, // Enable while using `gatsby develop`
                // tailwind: false, // Enable tailwindcss support
                // whitelist: ['whitelist'], // Don't remove this selector
                // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
                // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
            }
        },
        "gatsby-remark-images",
        "gatsby-transformer-remark",
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        "gatsby-plugin-gatsby-cloud",

    ].filter(Boolean),
}
