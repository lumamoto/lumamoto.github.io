import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { 
  Title, 
  Text, 
} from "./style"
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
            <b className="text-primary lined-link">B.S. in Computer Science</b>,
            and I am currently searching for full-time software engineering
            opportunities. 
            <br/>
            I have experience in web and mobile fullstack development, 
            as well as a bit of game development. I am always eager to learn new technologies,
            I am always working on side projects I am passionate about. As a developer, 
            my goal is to write beautiful code and deliver beautiful products.
          </Text>
          {/* <ResumeButton href="Lacey-Umamoto-Resume.pdf" target="_blank">
            Download Resume
          </ResumeButton > */}
          <ButtonDefault href="Lacey-Umamoto-Resume.pdf">
            Resume
          </ButtonDefault>
        </ContainerLayout>
      </SectionIntro>
    </>
  )
}

export default About
