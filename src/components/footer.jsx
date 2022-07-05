import * as React from "react"
import LogoWhiteStencil from "../icons/logo-white-stencil";
import * as styles from "./footer.module.css"

export function Footer() {
  return (
    <footer className={styles.footerStyle}>
      <div className={styles.blurb}>
        <div className={styles.logos}>
          <LogoWhiteStencil />
        </div>
        <div className={styles.copyright}>
        Copyright &copy; {new Date().getFullYear()} · All rights reserved.
        </div>
        <div className={styles.recap}>
          This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" target={"_blank"}>Privacy Policy</a> and <a href="https://policies.google.com/terms" target={"_blank"}>Terms of Service</a> apply.
        </div>
      </div>
    </footer>
  )
}
