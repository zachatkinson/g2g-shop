import * as React from "react"
import {Layout} from "../components/layout"
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
                        <p>This is some text.</p>
                    </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem className={styles.accordion__item}>
                    <AccordionItemHeading>
                        <AccordionItemButton className={styles.accordion__button}>Is your product locally sourced?</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className={styles.accordion__panel}>
                        <p>This is some text.</p>
                    </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem className={styles.accordion__item}>
                    <AccordionItemHeading>
                        <AccordionItemButton className={styles.accordion__button}>What can I plant in Good2Grow gardens?</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className={styles.accordion__panel}>
                        <p>This is some text.</p>
                    </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem className={styles.accordion__item}>
                    <AccordionItemHeading>
                        <AccordionItemButton className={styles.accordion__button}>What maintenance is required?</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className={styles.accordion__panel}>
                        <p>This is some text.</p>
                    </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem className={styles.accordion__item}>
                    <AccordionItemHeading>
                        <AccordionItemButton className={styles.accordion__button}>What customizable elements can be added to your planters?</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className={styles.accordion__panel}>
                        <p>This is some text.</p>
                    </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem className={styles.accordion__item}>
                    <AccordionItemHeading>
                        <AccordionItemButton className={styles.accordion__button}>How much assembly is required?</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className={styles.accordion__panel}>
                        <p>This is some text.</p>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>

            </div>
        </Layout>
    )
}