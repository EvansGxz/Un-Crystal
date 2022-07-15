import styled from "@emotion/styled";
import { colors } from "../../Styles/colors";
import Home from "../../assets/Aside/home.png";
import Profile from "../../assets/Aside/user.png";
import React, { useState } from "react";
import Config from "../../assets/Aside/config.png";
import Logout from "../../assets/Aside/logout.png";

export const Aside = styled.div`
  background-color: ${colors.blue};
  width: 20vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: end;
  padding-right: 1vh;
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
  
  const styles = {
    day: {
      transition: "all 0.3s",
      backgroundColor: isHovering ? "salmon" : "",
      color: isHovering ? "white" : "",
      
    },
  };
  return (
    <Aside>
      <IconContainer
        style={{
      transition: "all 0.3s",
      backgroundColor: isHovering ? "salmon" : "",
      color: isHovering ? "white" : "",
      
    }}
        onMouseEnter={()=>setIsHovering(true)}
        onMouseLeave={()=>setIsHovering(false)}
      >
        <Icon src={Home} />
        <Text style={styles.day}>Inicio</Text>
      </IconContainer>
      <IconContainer
        style={{
      transition: "all 0.3s",
      backgroundColor: isHovering1 ? "salmon" : "",
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
      backgroundColor: isHovering2 ? "salmon" : "",
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
      backgroundColor: isHovering3 ? "salmon" : "",
      color: isHovering3 ? "white" : "",
      
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
