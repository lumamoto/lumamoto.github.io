import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
import { Title, Text } from "./style"
import { ContainerLayout, ButtonDefault } from "../common"

import { ChevronsDown } from "react-feather"
import colors from "../../data/variables"

const About = () => {
  return (
    <div style={{ display: "table-cell", verticalAlign: "middle" }}>
      <ContainerLayout>
        <Title>Hi, I’m Lacey!{" "}
          <span role="img" aria-label="star">💫</span>
        </Title>
        <Text>
          My pronouns are she/her/hers. I recently graduated from the University
          of California, San Diego in December 2020 with a{" "}
          <span className="text-primary">B.S. in Computer Science</span>.
          <br />I have experience in web, mobile, and game development, and I
          enjoy creating projects both on my own and with others at{" "}
          <a href="https://devpost.com/lumamoto">
            <b className="text-primary lined-link">hackathons</b>
          </a>
          . In my free time, I love working on fun side projects, learning new
          technologies, playing video games, cooking dubious vegan food, and
          listening to funky music.
          <br />
        </Text>
        <ButtonDefault href="Lacey-Umamoto-Resume.pdf">Resume</ButtonDefault>
      </ContainerLayout>
      <div
          style={{
            color: colors.primary,
            margin: `3.5rem 0 3.5rem 0`,
            textAlign: "center",
          }}
        >
          <ChevronsDown className="align-middle" />
        </div>
    </div>
  )
}

export default About
