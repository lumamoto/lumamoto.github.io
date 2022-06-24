import React from "react"
import Layout from "../components/layout"
import { ContainerLayout, Title, Intro, SubText } from "../components/common"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <ContainerLayout>
      <Intro className="center">
        <Title>404</Title>
        <Title>NOT FOUND</Title>
        <SubText>
          Hey, how'd you end up here? Here's the way back
          {" "}
          <Link to="/">
            <b className="text-primary lined-link">home</b>
          </Link>
          .
        </SubText>
      </Intro>
    </ContainerLayout>
  </Layout>
)

export default NotFoundPage
