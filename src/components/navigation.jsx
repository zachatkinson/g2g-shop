import {graphql, useStaticQuery, Link} from "gatsby"
import * as React from "react"
import slugify from "@sindresorhus/slugify"
import {navStyle, navLink, activeLink} from "./navigation.module.css"

export function Navigation({className}) {
    const {
        allShopifyProduct: {productTypes},
    } = useStaticQuery(graphql`
        query {
            allShopifyProduct {
                productTypes: distinct(field: productType)
            }
        }
    `)

    return (
        <nav className={[navStyle, className].join(" ")}>
            {productTypes.map((name) => (
                <Link
                    key={name}
                    className={navLink}
                    to={`/products/${slugify(name)}`}
                    activeClassName={activeLink}
                >
                    {"SHOP"}
                </Link>
            ))}
            <Link to={`/customs`}
                  className={navLink}
                  activeClassName={activeLink}
                  >
                CUSTOM
            </Link>
            <Link to={"/blog"}
                  className={navLink}
                  activeClassName={activeLink}
            >
                BLOG
            </Link>
            <Link to={"/faq"}
                  className={navLink}
                  activeClassName={activeLink}
                  >
                FAQ
            </Link>
            <Link to={"/contact"}
                  className={navLink}
                  activeClassName={activeLink}
            >
                CONTACT
            </Link>
        </nav>
    )
}
