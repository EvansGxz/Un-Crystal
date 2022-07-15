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
  height: 3.5vh;
  margin-right: 2rem;
`;

const Text = styled.p`
  font-size: 2vh;
  font-weight: 600;
  
`;

const IconContainer = styled.div`
  background-color: ${colors.white};
  width: 13vw;
  height: 8vh;
  border: 1px solid #ccc;
  border-radius: 30px;
  flex-direction: row;
  display: flex;
  align-items: center;
  align-content: center;
  text-align: center;
  justify-content: center;
`;

export default function AsideBar(){

  return(
    <Aside>
    <IconContainer>
      <Icon src={Home}/>
      <Text>Inicio</Text>
      </IconContainer>
      <IconContainer>
      <Icon src={Home}/>
      <Text>Inicio</Text>
      </IconContainer>
    </Aside>
  )
}