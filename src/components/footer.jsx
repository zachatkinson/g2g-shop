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
          This site is protected by hCaptcha and its <a href="https://www.hcaptcha.com/privacy" target={"_blank"} rel={"noreferrer"}>Privacy Policy</a> and <a href="https://www.hcaptcha.com/terms" target={"_blank"} rel={"noreferrer"}>Terms of Service</a> apply.
        </div>
      </div>
    </footer>
  )
}
