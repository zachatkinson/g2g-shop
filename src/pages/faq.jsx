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


export default function FaqPage({data}) {
    return (
        <Layout>
            <div className={styles.sectionInner}>
                <h1 className={"textCenter"}>FAQ</h1>
            <Accordion allowZeroExpanded className={styles.accordion}>

                <AccordionItem className={styles.accordion__item}>
                    <AccordionItemHeading>
                        <AccordionItemButton className={styles.accordion__button}>Why do you use pressurized wood?</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className={styles.accordion__panel}>
                        <p>Good2Grow planters are constructed with pressurized wood because of its strength and durability making it ideal for standing up to the rigors of the weather and elements. Additionally, pressurized wood is easy to maintain and can be cleaned with soap and water. Pressurized wood is also an environmentally friendly material that can be recycled or reused.</p>
                    </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem className={styles.accordion__item}>
                    <AccordionItemHeading>
                        <AccordionItemButton className={styles.accordion__button}>Is your product locally sourced?</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className={styles.accordion__panel}>
                        <p>All Good2Grow planters are constructed using high-quality, pressure treated Canadian lumber.</p>
                    </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem className={styles.accordion__item}>
                    <AccordionItemHeading>
                        <AccordionItemButton className={styles.accordion__button}>What can I plant in Good2Grow planters?</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className={styles.accordion__panel}>
                        <p>Flowers, shrubs, vegetables, and more! Due to our generous soil depth, you can grow anything you like in our planters.</p>
                    </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem className={styles.accordion__item}>
                    <AccordionItemHeading>
                        <AccordionItemButton className={styles.accordion__button}>What maintenance is required?</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className={styles.accordion__panel}>
                        <p>When your Good2Grow planter arrives, you'll fill it with soil, add your plants, and hook up your water supply.  Afterwards, the only maintenance required will be harvesting and (optionaally) cleaning the exterior of the box come planting season using soap and water.</p>
                    </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem className={styles.accordion__item}>
                    <AccordionItemHeading>
                        <AccordionItemButton className={styles.accordion__button}>What customizable elements can be added to your planters?</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className={styles.accordion__panel}>
                        <p>If you're looking for something custom, our craftsmen are standing by and ready to help. <Link to={"/customs"}>Head over to our custom builds page now</Link> to get started on your project.</p>
                    </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem className={styles.accordion__item}>
                    <AccordionItemHeading>
                        <AccordionItemButton className={styles.accordion__button}>How much assembly is required?</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className={styles.accordion__panel}>
                        <p>All Good2Grow planters are delivered fully constructed. Simply add your soil, plants, and water connection!</p>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>

            </div>
        </Layout>
    )
}