import React from "react"
import {graphql, Link} from "gatsby"
import {Layout} from "../components/layout";
import {Seo} from "../components/seo";
import * as styles from "./blog-list.module.css";
import {GatsbyImage, getImage} from "gatsby-plugin-image"


function Hero() {
    return (
        <div className={styles.blogHero}>

            <h1>BLOG</h1>

        </div>
    )
}

export default function Blog({data, pageContext}) {
    const {posts} = data.blog
    console.log(pageContext.currentPage)


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
                                <h2 className={styles.blogTitle}>{post.frontmatter.title}</h2>
                                <small>{post.frontmatter.author}, {post.frontmatter.date}</small>
                                <p>{post.excerpt}</p>
                            </Link>
                        </article>
                    ))}
                </div>
                <div className={styles.postPagination}>
                {Array.from({ length: pageContext.numPages }, (_, i) => (
                    <Link className={styles.postListLink} key={`pagination-number${i + 1}`} to={`/${i === 0 ? "blog" : "blog/"+ (i + 1)}`}>
                        {i + 1}
                    </Link>
                ))}
                </div>
            </div>
        </Layout>

    )
}

export const pageQuery = graphql`
    query BlogListQuery($skip: Int!, $limit: Int!){
        blog: allMdx(
            sort: { fields: [frontmatter___date], order: DESC }
            limit: $limit
            skip: $skip
        )
        {
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