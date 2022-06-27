import Img from "gatsby-image"
import styled from 'styled-components';
import variables from '../../data/variables';
import colors from "../../data/variables";

export const AboutSection = styled.section`
  position: relative;
  text-align: center;
  @media only screen and (min-width: ${variables.breakpointLarge}) {
    display: grid;
    grid-template-columns: 1fr 1.25fr;
    grid-gap: 10rem;
    text-align: left;
  }
`
export const Avatar =styled(Img)`
  border-radius: 5px;
  box-shadow: 0px 0px 64px rgba(0, 0, 0, 0.15);
  width: 100%;
`
export const Title = styled.h1`
  margin: 3rem 0 0 0;
  font-size: 3rem;
  font-family: "GT-Walsheim-Pro-Bold";
  @media(max-width: ${variables.breakpointPhone}) {
    font-size: 2rem;
  }
`

export const Text = styled.p`
  font-size: 1.2rem;
  line-height: 2;
  color: #232323;
  a {
    color: #3F51B5;
    text-decoration: underline;
  }
`
export const SubTitle = styled.h2`
  font-family: "GT-Walsheim-Pro-Medium";
  word-spacing: 8px;
  @media(min-width: ${variables.breakpointPhone}) {
    font-size: 1.8em;
  }
`

export const InlineColorText = styled.span`
  color: ${colors.primary}
`
// background: linear-gradient(90deg, #0e3735, #85CDC8);
// background-clip: text;
// -webkit-background-clip: text;
// -moz-background-clip: text;
// -moz-text-fill-color: transparent;
// -webkit-text-fill-color: transparent;
// display: inline-block