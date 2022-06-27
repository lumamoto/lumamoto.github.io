import React from "react";
import { Title, Text } from "./style";
import { ContainerLayout, ButtonDefault } from "../common";

import { ChevronsDown } from "react-feather";
import colors from "../../data/variables";

const greetings = ["Hi", "Hey", "Howdy", "Hello", "Hiya"];
const greeting = greetings[Math.floor(Math.random() * greetings.length)];

const emojis = ["✨", "💫", "🌈", "☀️", "🌱"];
const emoji = emojis[Math.floor(Math.random() * emojis.length)];

const About = () => {
  return (
    <div style={{ display: "table-cell", verticalAlign: "middle" }}>
      <ContainerLayout>
        <Title>
          {greeting}, I’m Lacey! <span role="img">{emoji}</span>
        </Title>
        <Text>
          My pronouns are <i>she/they</i>. I am currently working as a Software
          Engineer at{" "}
          <a href="https://arete.com">
            <b className="text-primary lined-link">Areté</b>
          </a>
          . I graduated from the University of California, San Diego in December
          2020 with a B.S. in Computer Science.
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
          margin: `5rem 0 0 0`,
          textAlign: "center",
        }}
      >
        <ChevronsDown
          // onClick = {() =>scrollEffect(projectsRef)}
          className="align-middle"
        />
      </div>
    </div>
  );
};

export default About;
