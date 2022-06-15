import * as React from "react"
import {Link} from "gatsby"
import {Layout} from "../components/layout"
import Autocomplete from "react-google-autocomplete";
import * as styles from "./customs.module.css";


function Hero() {
    return (
        <div className={styles.Hero}>

            <h1>Custom Planters</h1>

        </div>
    )
}

export default function CustomPage({data}) {
    return(
        <Layout>
            <Hero />
            <div className={styles.container}>
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
                <label>
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
                <button type="submit" className={styles.submitButton}>Send</button>
            </form>
            </div>
        </Layout>
    )
}
