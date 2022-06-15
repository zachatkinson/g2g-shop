import * as React from "react"
import {Layout} from "../components/layout"
import {Link} from "gatsby"
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel
} from "react-accessible-accordion";

import * as styles from "./faq.module.css"


function Hero() {
    return (
        <div className={styles.faqHero}>

                <h1>FAQ</h1>

        </div>
    )
}

export default function FaqPage({data}) {
    return (
        <Layout>
            <Hero />
            <div className={styles.sectionInner}>
                <div className={styles.questions}>
                    <div className={styles.faqShipping}>
                        <h2>Shipping</h2>
                        <Accordion allowZeroExpanded className={styles.accordion}>

                            <AccordionItem className={styles.accordion__item}>
                                <AccordionItemHeading>
                                    <AccordionItemButton className={styles.accordion__button}>How long does it take for me to receive my order?</AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel className={styles.accordion__panel}>
                                    <p>Each of our items is made to order. Orders typically take between 3-7 days to be built, depending on how many orders we have in the queue. Once your order has been completed, you will receive an email regarding shipping or pickup.</p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem className={styles.accordion__item}>
                                <AccordionItemHeading>
                                    <AccordionItemButton className={styles.accordion__button}>What is your returns policy?</AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel className={styles.accordion__panel}>
                                    <p>If you’re looking to return or exchange your order for whatever reason, we’re here to help! We offer free returns or exchanges within 14 days of receiving your order. You can return your product for store credit, a different product, or a refund to the original payment method. Please note the following exceptions to our return and exchange policy:</p>
                                    <ul>
                                        <li>The products must be in original condition and packaged (if shipped)</li>
                                            <li>Returned items must have no visible signs of wear or use</li>
                                            <li>We do not offer prepaid shipping labels, customer must pay return shipping and we cannot refund original shipping</li>
                                            <li>All custom orders are final sale</li>
                                            <li>If you are unsure if the item you are ordering can be returned, please contact us prior to ordering</li>
                                    </ul>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem className={styles.accordion__item}>
                                <AccordionItemHeading>
                                    <AccordionItemButton className={styles.accordion__button}>Is there a warranty?</AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel className={styles.accordion__panel}>
                                    <p>There is a limited one-year warranty for each product.</p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem className={styles.accordion__item}>
                                <AccordionItemHeading>
                                    <AccordionItemButton className={styles.accordion__button}>How will my order ship?</AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel className={styles.accordion__panel}>
                                    <p>When your Good2Grow planter arrives, you'll fill it with soil, add your plants,
                                        and hook up your water supply. Afterwards, the only maintenance required will be
                                        harvesting and (optionaally) cleaning the exterior of the box come planting
                                        season using soap and water.</p>
                                </AccordionItemPanel>
                            </AccordionItem>

                        </Accordion>
                    </div>
                    <div className={styles.faqProduct}>
                        <h2>Product</h2>
                        <Accordion allowZeroExpanded className={styles.accordion}>

                            <AccordionItem className={styles.accordion__item}>
                                <AccordionItemHeading>
                                    <AccordionItemButton className={styles.accordion__button}>Why do you use pressurized
                                        wood?</AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel className={styles.accordion__panel}>
                                    <p>Good2Grow planters are constructed with pressurized wood because of its strength
                                        and durability making it ideal for standing up to the rigors of the weather and
                                        elements. Additionally, pressurized wood is easy to maintain and can be cleaned
                                        with soap and water. Pressurized wood is also an environmentally friendly
                                        material that can be recycled or reused.</p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem className={styles.accordion__item}>
                                <AccordionItemHeading>
                                    <AccordionItemButton className={styles.accordion__button}>Is your product locally
                                        sourced?</AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel className={styles.accordion__panel}>
                                    <p>All Good2Grow planters are constructed using high-quality, pressure treated
                                        Canadian lumber.</p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem className={styles.accordion__item}>
                                <AccordionItemHeading>
                                    <AccordionItemButton className={styles.accordion__button}>What can I plant in
                                        Good2Grow planters?</AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel className={styles.accordion__panel}>
                                    <p>Flowers, shrubs, vegetables, and more! Due to our generous soil depth, you can
                                        grow anything you like in our planters.</p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem className={styles.accordion__item}>
                                <AccordionItemHeading>
                                    <AccordionItemButton className={styles.accordion__button}>What maintenance is
                                        required?</AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel className={styles.accordion__panel}>
                                    <p>When your Good2Grow planter arrives, you'll fill it with soil, add your plants,
                                        and hook up your water supply. Afterwards, the only maintenance required will be
                                        harvesting and (optionaally) cleaning the exterior of the box come planting
                                        season using soap and water.</p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem className={styles.accordion__item}>
                                <AccordionItemHeading>
                                    <AccordionItemButton className={styles.accordion__button}>What customizable elements
                                        can be added to your planters?</AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel className={styles.accordion__panel}>
                                    <p>If you're looking for something custom, our craftsmen are standing by and ready
                                        to help. <Link to={"/customs"}>Head over to our custom builds page now</Link> to
                                        get started on your project.</p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem className={styles.accordion__item}>
                                <AccordionItemHeading>
                                    <AccordionItemButton className={styles.accordion__button}>How much assembly is
                                        required?</AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel className={styles.accordion__panel}>
                                    <p>All Good2Grow planters are delivered fully constructed. Simply add your soil,
                                        plants, and water connection!</p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
        </Layout>
    )
}