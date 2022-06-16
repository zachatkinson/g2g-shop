import * as React from "react"
import {Layout} from "../components/layout"
import * as styles from "./contact.module.css";
import {Seo} from "../components/seo";


function Hero() {
    return (
        <div className={styles.Hero}>

            <h1>Contact Us</h1>

        </div>
    )
}

export default function ContactPage({data}) {
    return (
        <Layout>
            <Seo title="Contact Good2Grow Now" />
            <Hero/>
            <div className={styles.sectionInner}>
                <div className={styles.contacts}>
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
                                Property Type<br/>
                                <select name={"job_type"} required>
                                    <option value={"residential"} selected={"selected"}>Residential</option>
                                    <option value={"commercial"}>Commercial / Office Space</option>
                                    <option value={"restaurant"}>Restaurant</option>
                                    <option value={"community"}>Community Gardens</option>
                                    <option value={"other"}>Other</option>
                                </select>
                            </label>
                            <label>
                                Message<br/>
                                <textarea name="message" id="message" rows="5"/>
                            </label>
                            <button type="submit" className={styles.submitButton}>Send</button>
                        </form>
                    </div>
                    <div className={styles.contactInfo}>
                        <h2>Mailing Address</h2>
                        <h2>Phone</h2>
                        <h2>Email</h2>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
