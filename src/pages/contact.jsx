import React, { useState }  from "react"
import {Layout} from "../components/layout"
import * as styles from "./contact.module.css"
import {Seo} from "../components/seo"


function Hero() {
    return (
        <div className={styles.Hero}>

            <h1>Contact Us</h1>

        </div>
    )
}

export default function ContactPage() {

    // Check if window is defined (so if in the browser or in node.js).
    // const isBrowser = typeof window !== "undefined"
    // if(isBrowser){
    //     window.grecaptcha.ready(function() {
    //         window.grecaptcha.execute(process.env.GATSBY_RECAPTCHA_SITE_KEY, {action: 'homepage'})
    //             .then(function(token) {
    //                 document.getElementById('captchaResponse').value = token;
    //             });
    //     });
    // }


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
                    <div className={styles.contactForm}>
                        <form method="post" action="https://getform.io/f/61ea152c-7c37-487e-bca7-c848aeaa2166">
                            <label>
                                Name<br/>
                                <input type="text" name="name" id="name" required/>
                            </label>
                            <label>
                                Email<br/>
                                <input type="email" name="email" id="email" required/>
                            </label>
                            <label>
                                Inquiry Type<br/>
                                <select name={"subject"} required defaultValue={"feedback"}>
                                    <option value={"shipping"}>Shipping</option>
                                    <option value={"billing"}>Commercial / Office Space</option>
                                    <option value={"product question"}>Product Question</option>
                                    <option value={"feedback"}>Feedback</option>
                                    <option value={"orders-cancellations"}>Orders / Cancellations</option>
                                    <option value={"other"}>Other</option>
                                </select>
                            </label>
                            <label>
                                Message<br/>
                                <textarea name="message" id="message" rows="5"/>
                            </label>
                            <input type="hidden" id="captchaResponse" name="g-recaptcha-response" />
                            <button type="submit" className={styles.submitButton}>Send</button>
                        </form>
                    </div>
                </div>
            </div>

        </Layout>
    )
}