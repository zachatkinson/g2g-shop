import * as React from "react"
import {Link} from "gatsby"
import {Layout} from "../components/layout"
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
                    Email
                    <input type="email" name="email" id="email" />
                </label>
                <label>
                    Subject
                    <input type="text" name="subject" id="subject" />
                </label>
                <label>
                    Message
                    <textarea name="message" id="message" rows="5" />
                </label>
                <button type="submit" className={submitButton}>Send</button>
            </form>
            </div>
        </Layout>
    )
}
