import styled from "@emotion/styled";
import { colors } from "../../Styles/colors";

export const Section = styled.div`
  background-color: ${colors.dark};
  width: 60vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 600px) {width: 100vw}
`;