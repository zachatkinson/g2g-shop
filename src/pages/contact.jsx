import * as React from "react"

import {Layout} from "../components/layout"

import * as styles from "./contact.module.css"

export default function ContactPage({data}) {
    return(
        <Layout>
            <div className={styles.sectionInner}>
                <h1>Contact Us</h1>
            </div>
        </Layout>
    )
}
