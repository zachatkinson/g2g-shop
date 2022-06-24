const path = require(`path`)
const {createFilePath} = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({node, getNode, actions}) => {
    const {createNodeField} = actions

    if (node.internal.type === `Mdx`) {
        const slug = createFilePath({node, getNode, basePath: `pages`})

        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
    }
}

exports.createPages = async ({graphql, actions}) => {
    const {createPage} = actions
    const result = await graphql(`
        query{
            allMdx {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    
    `)

    const posts = result.data.allMdx.edges
    const postsPerPage = 6
    const numPages = Math.ceil(posts.length / postsPerPage)
    Array.from({length: numPages}).forEach((_, i) => {
        createPage({
            path: i === 0 ? `/blog` : `/blog/${i + 1}`,
            component: path.resolve("./src/templates/blog-list.jsx"),
            context: {
                // Data passed to context is available
                // in page queries as GraphQL variables.
                limit: postsPerPage,
                skip: i * postsPerPage,
                numPages,
                currentPage: i + 1,
            },
        })
    })
    result.data.allMdx.edges.forEach(({node}) => {
        //create all single post pages
        createPage({
            path: "/blog/" + node.slug,
            component: path.resolve(`./src/templates/blog-post.jsx`),
            context: {
                // Data passed to context is available
                // in page queries as GraphQL variables.
                slug: node.slug,
            },
        })
    })
}