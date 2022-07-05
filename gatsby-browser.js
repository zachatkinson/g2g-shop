import * as React from "react"
import { StoreProvider } from "./src/context/store-context"
import "./src/styles/reset.css"
import "./src/styles/variables.css"
import "./src/styles/global.css"
import "@fontsource/bebas-neue"
import {Helmet} from "react-helmet";

export const wrapRootElement = ({ element }) => (

    <StoreProvider>
        <Helmet>
            <script src="https://www.google.com/recaptcha/api.js?render=6Lc1w8IgAAAAAO5FcQKRTDcnXNKs3eftKtu8Gis8"></script>
        </Helmet>
        {element}
    </StoreProvider>
)
