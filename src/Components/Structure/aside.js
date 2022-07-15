import styled from "@emotion/styled";
import { colors } from "../../Styles/colors";
import Home from "../../assets/Aside/home.png";
import Profile from "../../assets/Aside/user.png";
import React, { useState } from "react";
import Config from "../../assets/Aside/config.png";
import Logout from "../../assets/Aside/logout.png";

export const Aside = styled.div`
  background-color: ${colors.dark};
  width: 20vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: end;
  padding-right: 1vh;
  border-right: 1px solid #ccc;
`;

const Icon = styled.img`
  height: 3.5vh;
  margin-right: 1rem;
  filter: invert(100%);

`;

const Text = styled.p`
  font-size: 2vh;
  font-weight: 600;
  width: 8rem;
  text-align: left;
  color: ${colors.white}
`;

const IconContainer = styled.div`
  width: 13vw;
  height: 8vh;
  /*border: 1px solid #ccc;*/
  border-radius: 0 2vw 2vw 0;
  flex-direction: row;
  display: flex;
  align-items: center;
  align-content: center;
  text-align: center;
  justify-content: center;
  margin-top: 1vh;
  cursor: pointer;
`;

export default function AsideBar() {
  const [isHovering, setIsHovering] = useState(false);
  const [isHovering1, setIsHovering1] = useState(false);
  const [isHovering2, setIsHovering2] = useState(false);
  const [isHovering3, setIsHovering3] = useState(false);
  
 
  return (
    <Aside>
      <IconContainer
        style={{
      transition: "all 0.3s",
      backgroundColor: isHovering ? "rgba(231, 233, 234, 0.1)" : "",
      color: isHovering ? "white" : "",
      
    }}
        onMouseEnter={()=>setIsHovering(true)}
        onMouseLeave={()=>setIsHovering(false)}
      >
        <Icon src={Home} />
        <Text>Inicio</Text>
      </IconContainer>
      <IconContainer
        style={{
      transition: "all 0.3s",
      backgroundColor: isHovering1 ? "rgba(231, 233, 234, 0.1)" : "",
      color: isHovering1 ? "white" : "",
      
    }}
        onMouseEnter={()=>setIsHovering1(true)}
        onMouseLeave={()=>setIsHovering1(false)}
      >
        <Icon src={Profile} />
        <Text>Perfil</Text>
      </IconContainer>
      <IconContainer
        style={{
      transition: "all 0.3s",
      backgroundColor: isHovering2 ? "rgba(231, 233, 234, 0.1)" : "",
      color: isHovering2 ? "white" : "",
      
    }}
        onMouseEnter={()=>setIsHovering2(true)}
        onMouseLeave={()=>setIsHovering2(false)}
      >
        <Icon src={Config} />
        <Text>Preferencias</Text>
      </IconContainer>
      <IconContainer
        style={{
      transition: "all 0.3s",
      backgroundColor: isHovering3 ? "rgba(231, 233, 234, 0.1)" : "",
      color: isHovering3 ? "white" : "",
      position: "absolute",
    bottom: 0,
    marginBottom: "1vh",
    }}
        onMouseEnter={()=>setIsHovering3(true)}
        onMouseLeave={()=>setIsHovering3(false)}
      >
        <Icon src={Logout} />
        <Text>Cerrrar Sesión</Text>
      </IconContainer>
 
    </Aside>
  );
}
