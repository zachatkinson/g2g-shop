import * as React from "react"
import {SkipNavContent, SkipNavLink} from "./skip-nav"
import {Header} from "./header"
import {Footer} from "./footer"
import {Seo} from "./seo"
import {Helmet} from "react-helmet";

export function Layout({children}) {
    const scriptCall = "https://www.google.com/recaptcha/api.js?render=" + process.env.GATSBY_RECAPTCHA_SITE_KEY

    return (
        <div>
            <Helmet>
                <script src={scriptCall} async defer></script>
            </Helmet>
            <Seo/>
            <SkipNavLink/>
            <Header/>
            <SkipNavContent>{children}</SkipNavContent>
            <Footer/>
        </div>
    )
}
