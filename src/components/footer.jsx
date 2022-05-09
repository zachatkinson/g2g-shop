import * as React from "react"
import LogoWhiteStencil from "../icons/logo-white-stencil";
import {
  footerStyle,
  copyright,
  links,
  blurb,
  logos,
  footerNavList,
  footerNavListItem,
} from "./footer.module.css"

export function Footer() {
  return (
    <footer className={footerStyle}>
      <div className={blurb}>
        <div className={logos}>
          <LogoWhiteStencil />
        </div>
        <div className={copyright}>
        Copyright &copy; {new Date().getFullYear()} · All rights reserved
        </div>
      </div>
    </footer>
  )
}
