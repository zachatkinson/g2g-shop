import * as React from "react"
import {Layout} from "../components/layout"
import Autocomplete from "react-google-autocomplete";
import * as styles from "./customs.module.css";
import {Seo} from "../components/seo";


function Hero() {
    return (
        <div className={styles.Hero}>

            <h1>Custom Planters</h1>

        </div>
    )
}

export default function CustomPage({data}) {
    // Check if window is defined (so if in the browser or in node.js).
    const isBrowser = typeof window !== "undefined"
    if(isBrowser){
        window.grecaptcha.ready(function() {
            window.grecaptcha.execute(process.env.GATSBY_RECAPTCHA_SITE_KEY, {action: 'homepage'})
                .then(function(token) {
                    document.getElementById('captchaResponse').value = token;
                });
        });
    }
    return(
        <Layout>
            <Seo title="Custom Built Auto-Watering Gardens by Good2Grow" />
            <Hero />
            <div className={styles.sectionInner}>
                <h2 className={"textCenter"}>Level Up Your Outdoor Space</h2>
                <p className={styles.intro}>Are you looking for a different size or configuration from the standard Good2Grow planters? Let us know a little about your project with our form below and a good2Grow representative will reach out to discuss your project with you. </p>
                <form method="post" action="https://getform.io/f/61ea152c-7c37-487e-bca7-c848aeaa2166">
                <label>
                    Name<br />
                    <input type="text" name="name" id="name" required />
                </label>
                <label>
                    Email<br />
                    <input type="email" name="email" id="email" required />
                </label>
                <label>
                    Property Type<br />
                    <select name={"job_type"} required>
                        <option value={"residential"} selected={"selected"}>Residential</option>
                        <option value={"commercial"}>Commercial / Office Space</option>
                        <option value={"restaurant"}>Restaurant</option>
                        <option value={"community"}>Community Gardens</option>
                        <option value={"other"}>Other</option>
                    </select>
                </label>
                <label for={"property_address"}>
                    Property Address<br />
                    <Autocomplete
                        name={"property_address"}
                        apiKey={process.env.GATSBY_PLACES_API}
                        onPlaceSelected={(place) => {
                            console.log(place)
                        }}
                        options={{
                            types: ["address"],
                            componentRestrictions: {
                                country: ["ca", "us"]
                            },
                        }}
                    />
                </label>
                <label>
                    Message<br />
                    <textarea name="message" id="message" rows="5" />
                </label>
                    <input type="hidden" id="captchaResponse" name="g-recaptcha-response" />
                <button type="submit" className={styles.submitButton}>Send</button>
            </form>
            </div>
        </Layout>
    )
}
