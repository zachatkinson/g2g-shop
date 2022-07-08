import * as React from "react"
import { StoreProvider } from "./src/context/store-context"
import "./src/styles/reset.css"
import "./src/styles/variables.css"
import "./src/styles/global.css"
import "@fontsource/bebas-neue"
import {Helmet} from "react-helmet";

const scriptCall = "https://www.google.com/recaptcha/api.js?render=" + process.env.GATSBY_RECAPTCHA_SITE_KEY

export const wrapRootElement = ({ element }) => (


    <StoreProvider>
        <Helmet>
            <script src={scriptCall}></script>
        </Helmet>
        {element}
    </StoreProvider>
)
