import * as React from "react"
import {graphql} from "gatsby"
import {Layout} from "../components/layout"
import {ProductListing} from "../components/product-listing"
import {
    container,
    intro,
    callOut,
    shopButton,
    innerHero,
    explainerSection,
    explain1,
    explain2,
    explain3,
    deliverySection,
    deliveryImage,
    deliveryDesc

} from "./index.module.css"

export const query = graphql`
    query {
        shopifyCollection(handle: { eq: "frontpage" }) {
            products {
                ...ProductCard
            }
        }
    }
`

function Hero(props) {
    return (
        <div className={container}>
            <div className={innerHero}>
                <h1 className={intro}>Good2Grow</h1>
                <h2>Gardening Made Easy</h2>
                <button className={shopButton}>Shop Now</button>

            </div>
        </div>
    )
}

function Explainer(props) {
    return (
        <div className={explainerSection}>
            <div className={explain1}>
                <h3>Fill</h3>
                <p className={callOut}>Add soil</p>
            </div>
            <div className={explain2}>
                <h3>Plant</h3>
                <p className={callOut}>Add seeds</p>
            </div>
            <div className={explain3}>
                <h3>Plug</h3>
                <p className={callOut}>Remove plug</p>
            </div>
        </div>
    )
}

function Delivery(props) {
    return (
        <div className={deliverySection}>
            <div className={deliveryImage}>
                <img src="delivery.jpg" />
            </div>
            <div className={deliveryDesc}>
                <h3>Delivery to your home or business</h3>
                <p>Fill it, plant it, plug it and forget it. Good to grow no maintenance gardens.
                    8/2 large gardens have 10 watering nozzles for optimum water supply for your plants.
                    4/2 medium size gardens have 6 watering nozzles..
                    16/36 contain watering stakes to distribute water throughout garden.
                    20 inches of soil to provide maximum space for plants to root to supply plants with nutrients to get highest growth potential and topmost vegetables, herbs or flowers.
                    Good to grow is the newest way to garden to obtain excellent growth with minimal work. </p>
            </div>

        </div>

    )
}

export default function IndexPage({data}) {
    return (
        <Layout>
            <Hero/>
            <Explainer/>

            <h2>Available in three sizes</h2>
            <ProductListing products={data?.shopifyCollection?.products}/>
        </Layout>
    )
}
