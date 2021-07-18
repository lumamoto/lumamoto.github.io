import React from "react"
import data from "./../../../data/data"
import colors from "../../../data/variables";

import {
  FooterStyle,
  CopyRight,
  // FooterBody,
  // SubRight,
  // sMediaLink,
  // sFooterSocialMedia,
} from "./style"
import {
  ContainerLayout,
  // ButtonDefault
} from "../../common"
import { Mail, GitHub, Linkedin } from "react-feather"

const Footer = () => {
  const iconStyle = {
    color: colors.primary,
    padding: "10px",
  }

  return (
    <>
      <FooterStyle>
        <ContainerLayout>
          <a style={iconStyle} href={`mailto:${data.SiteContact.email}`}>
            <Mail />
          </a>
          <a style={iconStyle} href={data.SiteSocialLinks.github}>
            <GitHub />
          </a>
          <a style={iconStyle} href={data.SiteSocialLinks.linkedin}>
            <Linkedin />
          </a>
          
          <CopyRight className="text-dark">
            ©
            <span>
              {" "}
              Lacey Umamoto {new Date().getFullYear()}.
              {/* , Built with {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>.{" "} */}
            </span>
          </CopyRight>
        </ContainerLayout>
      </FooterStyle>
    </>
  )
}

export default Footer
