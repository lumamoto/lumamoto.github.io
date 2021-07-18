import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { AboutSection, Avatar, Title, Text, SubTitle } from "./style"
import { SectionIntro, ContainerLayout, ResumeButton } from "../common"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "profile.webp" }) {
        childImageSharp {
          fluid(maxWidth: 550) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <SectionIntro>
        <ContainerLayout>
          {/* <AboutSection> */}
              <Title> Hey, I’m Lacey. </Title>
              <Text>
                {" "}
                I'm a digital Front End Developer hailing from{" "}
                <b className="text-primary lined-link">North Africa</b> living
                in Casablanca.{" "}

                I love working with modern technologies, building and designing
                awesome projects. I prefer minimalistic and clean designs with
                strong user experience.
              </Text>
              <ResumeButton href="Lacey-Umamoto-Resume.pdf" target="_blank">
                {" "}
                Download Resume{" "}
              </ResumeButton>
          {/* </AboutSection> */}
        </ContainerLayout>
      </SectionIntro>
    </>
  )
}

export default About
