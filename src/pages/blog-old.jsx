import React from "react"
import {graphql, Link} from "gatsby"
import {Layout} from "../components/layout";
import {Seo} from "../components/seo";
import * as styles from "./blog.module.css";
import {GatsbyImage, getImage} from "gatsby-plugin-image"


function Hero() {
    return (
        <div className={styles.blogHero}>

            <h1>BLOG</h1>

        </div>
    )
}

export default function BlogOld({data}) {
    const {posts} = data.blog
    console.log(posts)


    return (
        <Layout>
            <Seo title="Gardening Tips from Good2Grow"/>

            <Hero/>
            <div className={styles.sectionInner}>
                <div className={styles.postList}>

                    {posts.map(post => (

                        <article key={post.id}>
                            <Link to={post.slug} className={styles.postLink}>
                            <GatsbyImage alt={"test"} image={getImage(post.frontmatter.featuredImage)}/>
                            <h2>{post.frontmatter.title}</h2>
                            <small>{post.frontmatter.author}, {post.frontmatter.date}</small>
                            <p>{post.excerpt}</p>
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </Layout>

    )
}

export const pageQuery = graphql`
    query OldBlogQuery {
        blog: allMdx {
            posts: nodes {
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
                excerpt
                id
                slug
            }
        }
    }
`