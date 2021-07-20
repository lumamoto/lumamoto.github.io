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
            <span className="text-primary">B.S. in Computer Science</span>, and
            I am currently searching for full-time software engineering
            opportunities.
            <br />I have experience in web, mobile, and game
            development, and I enjoy creating projects both on my own and with
            others at{" "}
            <a href="https://devpost.com/lumamoto">
              <b className="text-primary lined-link">hackathons</b>
            </a>
            . In my free time, I love working on fun side projects, learning new
            technologies, discovering new music, and cooking funky vegan food.
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
