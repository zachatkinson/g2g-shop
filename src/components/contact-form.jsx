import React, { useEffect, useRef, useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import * as styles from "./contact-form.module.css"
import axios from "axios";

export default function Form() {
    const [token, setToken] = useState(null);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("")
    const captchaRef = useRef(null);

    const onSubmit = () => {
        // this reaches out to the hcaptcha library and runs the
        // execute function on it. you can use other functions as well
        // documented in the api:
        // https://docs.hcaptcha.com/configuration#jsapi
        captchaRef.current.execute();
    };

    const onExpire = () => {
        console.log("hCaptcha Token Expired");
    };

    const onError = (err) => {
        console.log(`hCaptcha Error: ${err}`);
    };

    useEffect(() => {
        if (token) {
            // Token is set, can submit here
            console.log(`User Email: ${email}`);
            console.log(`hCaptcha Token: ${token}`);

            axios.post('https://hcaptcha.com/siteverify', {
                secret: process.env.GATSBY_HCAPTCHA_SECRET_KEY,
                response: token
            })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }, [token, email]);

    return (
        <form>
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
                // This is testing sitekey, will autopass
                // Make sure to replace
                sitekey="10000000-ffff-ffff-ffff-000000000001"
                onVerify={setToken}
                onError={onError}
                onExpire={onExpire}
                ref={captchaRef}
                className={"hcaptcha"}
            />
            </div>
            {token && <div>Success! Token: {token}</div>}
            <button className={styles.submitButton} onClick={onSubmit}>Submit</button>
        </form>
    );
}
