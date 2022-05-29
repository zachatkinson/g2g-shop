import * as React from "react"
import {graphql, Link} from "gatsby"
import {Layout} from "../components/layout"
import {ProductListing} from "../components/product-listing"
import {
    container,
    intro,
    shopButton,
    explainerSection,
    explain1,
    explain2,
    explain3,
    chooseSection,
    chooseBenefits,
    benefit,
    testimonialSection,
    aboutSection,
    sectionInner,
    videoSectionInner,
    customSection,
    productSection,
    centerHeader,

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

function Hero() {
    return (
        <div className={container}>
            <video autoPlay={"autoplay"} loop={"loop"} muted={"muted"} poster="/hero-bg.jpg">
                    <source src="/hero-bg.mp4" type="video/mp4" />
            </video>
            <div className={videoSectionInner}>
                <h1 className={intro}>Good2Grow</h1>
                <h2>Auto-watering, no-maintenance modular gardens</h2>
                <Link to="#shop"><button className={shopButton}>Shop Now</button></Link>

            </div>
        </div>
    )
}

function Explainer() {
    return (
        <div className={explainerSection}>
            <div className={explain1}>
                <h3>Shop</h3>
            </div>
            <div className={explain2}>
                <h3>Grow</h3>

            </div>
            <div className={explain3}>
                <h3>Enjoy</h3>

            </div>
        </div>
    )
}
function FeaturedProducts(props){
    return (
        <div className={productSection}>
            <div className={sectionInner}>
                <h2 id="shop" className="scrollOffset">Modular Gardens</h2>
                <ProductListing products={props.data?.shopifyCollection?.products}/>
            </div>
        </div>
    )
}
function Customs(){
    return(
        <div className={customSection}>
            <div className={sectionInner}>
                <h2>Custom Builds Available</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            </div>
        </div>
    )
}

function ChooseUs(){
    return (
        <div className={chooseSection}>
            <div className={sectionInner}>
            <h2>Fill It, Plant It, Power It & Forget It</h2>
            <p>People are loving Good2Grow modular gardens because they make gardening easy. These no-maintenance garden boxes are designed for high yields. Grow your favourite fruits, veggies, or herbs with this simple and effective system.</p>
            <div className={chooseBenefits}>
                <div className={benefit}>
                    <h3>Gardening made easy</h3>
                    <p>Locally owned and constructed, we deliver right to your home or business. Within minutes you can have your modular garden set up and operational.</p>
                </div>
                <div className={benefit}>
                    <h3>Auto-Watering</h3>
                    <p>Our built-in automated timer system takes care of watering for you with easy pause activation during rainy days. Plus, the landscape lining prevents weed growth and holds in moisture while protecting wood. </p>
                </div>
                <div className={benefit}>
                    <h3>Optimized for Growth</h3>
                    <p>Each Good2Grow modular garden box is engineered to hold the right amount of soil for plants to root and get the necessary nutrients to thrive, achieving optimal growth with minimal work.</p>
                </div>
            </div>
            </div>
        </div>
    )
}

function Testimonials() {
    return (
        <div className={testimonialSection}>
            <div className={sectionInner}>
                <h2>Our Customers Love Our Gardens</h2>
            </div>
        </div>
    )
}

function About(){
    return (
        <div className={aboutSection}>
            <div className={sectionInner}>
                <h2>Who Is Good2Grow?</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            </div>
        </div>
    )
}

export default function IndexPage({data}) {
    return (
        <Layout>
            <Hero/>
            <Explainer/>
            <FeaturedProducts data={data} />
            <Customs />
            <ChooseUs/>
            <Testimonials/>
            <About/>
        </Layout>
    )
}
