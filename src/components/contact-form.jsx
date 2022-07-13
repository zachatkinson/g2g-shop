import React, { useEffect, useRef, useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import * as styles from "./contact-form.module.css"
import axios from "axios"

export default function Form() {

    const [token, setToken] = useState(null);
    const [error, setError] = useState("")
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("")
    const captchaRef = useRef(null);
    function handleSubmit(evt) {
        evt.preventDefault()
        console.log("I'm preventing default ")
        axios.post('https://hcaptcha.com/siteverify',{
            "secret": process.env.GATSBY_HCAPTCHA_SECRET_KEY,
            "response": token,
            "siteKey": process.env.GATSBY_HCAPTCHA_SITE_KEY
        }).then(function (response) {
            console.log(response);
        })
            .catch(function (error) {
                console.log(error);
            });
    }
    function onError(){

    }

    function onExpire(){

    }


    return (
        <form onSubmit={(evt) => handleSubmit(evt)}>
            <label>
                Name<br/>
                <input type="text" name="name" id="name" value={name} onChange={(evt) => setName(evt.target.value)} required/>
            </label>
            <label>
                Email<br/>
                <input type="email" name="email" id="email" value={email} onChange={(evt) => setEmail(evt.target.value)} required/>
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
            <div className={styles.captchaWrap}>
            <HCaptcha
                sitekey={process.env.GATSBY_HCAPTCHA_SITE_KEY}
                onVerify={token => setToken(token)}
                onError={onError}
                onExpire={onExpire}
                ref={captchaRef}
                className={"hcaptcha"}
            />
            </div>
            {error && <p>{error}</p>}
            {token && <div>Success! Token: {token}</div>}
            <button className={styles.submitButton} type={"submit"}>Submit</button>
        </form>
    );
}
