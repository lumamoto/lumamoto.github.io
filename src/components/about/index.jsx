import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
import { Title, Text } from "./style"
import { SectionIntro, ContainerLayout, ButtonDefault } from "../common"

const About = () => {
  return (
    <>
      <SectionIntro>
        <ContainerLayout>
          <Title> Hi, I’m Lacey! </Title>
          <Text>
            My pronouns are she/her/hers. I recently graduated from the
            University of California, San Diego in December 2020 with a{" "}
            <span className="text-primary">B.S. in Computer Science</span>, and I am
            currently searching for full-time software engineering
            opportunities.
            <br />I have experience in web and mobile fullstack development, as
            well as a bit of game development. I enjoy collaborating with others
            and learning new technologies, which is why I enjoy participating in{" "}
            <a href="https://devpost.com/lumamoto">
              <b className="text-primary lined-link">hackathons</b>
            </a>
            . As a developer, my goal is to write beautiful code and deliver
            beautiful products.
            <br />
          </Text>
          {/* <ResumeButton href="Lacey-Umamoto-Resume.pdf" target="_blank">
            Download Resume
          </ResumeButton > */}
          <ButtonDefault href="Lacey-Umamoto-Resume.pdf">Resume</ButtonDefault>
        </ContainerLayout>
      </SectionIntro>
    </>
  )
}

export default About
