import React from "react"
import { graphql } from "gatsby"
import {Layout} from "../components/layout";
import { MDXRenderer } from "gatsby-plugin-mdx"
import {GatsbyImage, getImage} from "gatsby-plugin-image"

import * as styles from "./blog-post.module.css";

export default function BlogPost({ data }) {
    const post = data

    return (

        <Layout>
            <GatsbyImage alt={"test"} image={getImage(post.mdx.frontmatter.featuredImage)}/>
            <div className={styles.sectionInner}>
            <h1 className={styles.postHead}>{post.mdx.frontmatter.title}</h1>
            <small>{post.mdx.frontmatter.date}</small>
            <MDXRenderer>{post.mdx.body}</MDXRenderer>
            </div>
        </Layout>
    )
}
export const query = graphql`
    query BlogPostQuery($slug: String!) {
        mdx(slug: { eq: $slug } ) {
            body
            frontmatter {
                date(fromNow: true)
                title
                author
                featuredImage {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
        }
    }
`
