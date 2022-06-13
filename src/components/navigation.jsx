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
                    {"Shop Planters"}
                </Link>
            ))}
            <Link to={`/customs`}
                  className={navLink}
                  activeClassName={activeLink}
                  >
                Custom Builds
            </Link>
            <Link to={"#"}
                  className={navLink}
                  activeClassName={activeLink}
            >
                Gardening Tips
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
                Contact
            </Link>
        </nav>
    )
}
