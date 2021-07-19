import styled from 'styled-components';
import variables from '../../../data/variables';

export const MainContent = styled.div``
// @media(min-width: ${variables.breakpointPhone}) {
//   background: linear-gradient(to bottom,rgb(239 233 233 / 46%),transparent 22%);
// }

export const BigTitle = styled.h1`
  text-align: center;
  font-size: 3rem;
  font-family: "GT-Walsheim-Pro-Bold";
  @media(max-width: ${variables.breakpointPhone}) {
    font-size: 2rem;
  }
`