import React from "react"
import {Layout} from "../components/layout"
import * as styles from "./contact.module.css"
import {Seo} from "../components/seo"
import Form from "../components/contact-form";


function Hero() {
    return (
        <div className={styles.Hero}>

            <h1>Contact Us</h1>

        </div>
    )
}

export default function ContactPage() {

    return (
        <Layout>
            <Seo title="Contact Good2Grow Now" />
            <Hero/>
            <div className={styles.sectionInner}>
                <h2 className={"textCenter"}>Reach out to Good2Grow</h2>
                <p className={styles.intro}>Whether you have questions, comments, compliments, or complaints &mdash; we want to hear from you. Reach out to us using your preferred contact method below. We strive to respond to all inquiries within two business days.</p>
                <div className={styles.contacts}>
                    <div className={styles.contactInfo}>
                        <div>
                            <h4>Mailing Address</h4>
                            <address>54 Longueuil Pl, Whitby ON, L1R 3G9 Canada</address>
                        </div>
                        <div>
                            <h4>Phone</h4>
                            <p><a href={"tel:4168997042"}>416-899-7042</a></p>
                        </div>
                        <div>
                            <h4>Email</h4>
                            <p><a href={"mailto:support@good2growontario.com"}>support@good2growontario.com</a></p>
                        </div>

                    </div>

                        <Form />

                </div>
            </div>

        </Layout>
    )
}