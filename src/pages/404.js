import React from "react";
import Layout from "../components/layout";
import { ContainerLayout, Title, Intro, SubText } from "../components/common";
import { Link } from "gatsby";

const NotFoundPage = () => (
  <Layout>
    <div
      style={{
        height: "85vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ContainerLayout>
        <Intro className="center">
          <Title>404</Title>
          <Title>Page Not Found</Title>
          <SubText>
            All right, that's enough; let's get you{" "}
            <Link to="/">
              <b className="text-primary lined-link">home</b>
            </Link>
            .
          </SubText>
        </Intro>
      </ContainerLayout>
    </div>
  </Layout>
);

export default NotFoundPage;
