import styled from "@emotion/styled";
import { colors } from "../../Styles/colors";
import Home from "../../assets/Aside/home.png"

export const Aside = styled.div`
  background-color: ${colors.blue};
  width: 15vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Icon = styled.img`
  width: 2vw;
`;

const IconContainer = styled.div`
  background-color: ${colors.white};
  width: 10vw;
  height: 10vh;
  radio-border: 50%;
`;

export default function AsideBar(){

  return(
    <Aside>
    <IconContainer>
      <Icon src={Home}/>
      <p>Inicio</p>
      </IconContainer>
      <IconContainer>
      <Icon src={Home}/>
      <p>Inicio</p>
      </IconContainer>
    </Aside>
  )
}