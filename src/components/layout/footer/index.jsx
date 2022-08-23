import React from "react";
import data from "./../../../data/data";
import colors from "../../../data/variables";
import { FooterStyle, CopyRight } from "./style";
import { ContainerLayout } from "../../common";
import { Mail, GitHub, Linkedin, Hexagon } from "react-feather";

const Footer = () => {
  const iconStyle = {
    color: colors.primary,
    padding: "12px",
  };

  return (
    <>
      <FooterStyle>
        <ContainerLayout>
          <a
            className="lined-link"
            style={iconStyle}
            href={`mailto:${data.SiteContact.email}`}
          >
            <Mail />
          </a>
          <a
            className="lined-link"
            style={iconStyle}
            href={data.SiteSocialLinks.github}
          >
            <GitHub />
          </a>
          <a
            className="lined-link"
            style={iconStyle}
            href={data.SiteSocialLinks.devpost}
          >
            <Hexagon />
          </a>
          <a
            className="lined-link"
            style={iconStyle}
            href={data.SiteSocialLinks.linkedin}
          >
            <Linkedin />
          </a>

          <CopyRight className="text-dark">
            ©
            <span>
              {" "}
              レイシー 馬本 {new Date().getFullYear()}.
            </span>
          </CopyRight>
        </ContainerLayout>
      </FooterStyle>
    </>
  );
};

export default Footer;
