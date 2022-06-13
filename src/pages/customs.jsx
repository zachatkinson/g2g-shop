import * as React from "react"
import {Link} from "gatsby"
import {Layout} from "../components/layout"
import Autocomplete from "react-google-autocomplete";
import {
    container,
    submitButton,
} from "./customs.module.css"

export default function CustomPage({data}) {
    return(
        <Layout>
            <div className={container}>
            <h1>Custom Auto Watering Planters</h1>
            <form method="post" action="https://getform.io/f/61ea152c-7c37-487e-bca7-c848aeaa2166">
                <label>
                    Name<br />
                    <input type="text" name="name" id="name" />
                </label>
                <label>
                    Email<br />
                    <input type="email" name="email" id="email" />
                </label>
                <label>
                    Property Type<br />
                    <select name={"job_type"}>
                        <option value={"residential"}>Residential</option>
                        <option value={"commercial"}>Commercial / Office Space</option>
                        <option value={"restaurant"}>Restaurant</option>
                        <option value={"community"}>Community Gardens</option>
                    </select>
                </label>
                <label>
                    Property Address<br />
                    <Autocomplete
                        apiKey={"AIzaSyD8JH95SBl96v41rFTZsDKE9B3cLO6PVV8"}
                        onPlaceSelected={(place) => {
                            console.log(place)
                        }}
                    />

                </label>
                <label>
                    Message<br />
                    <textarea name="message" id="message" rows="5" />
                </label>
                <button type="submit" className={submitButton}>Send</button>
            </form>
            </div>
        </Layout>
    )
}
