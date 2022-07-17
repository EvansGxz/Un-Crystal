import styled from "@emotion/styled";
import { colors } from "../../Styles/colors";
import './input.css';
import Search from "../../assets/Header/loupe.png"
import { useState } from "react";
import "./style.css";
import { ModalLeft } from "../Modal/modal-left";
import Burger from "../../assets/Mobile/menu.png";
import Home from "../../assets/Aside/home.png";
import Profile from "../../assets/Aside/user.png";
import Config from "../../assets/Aside/config.png";
import Logout from "../../assets/Aside/logout.png";

export const Container = styled.div`
  background-color: ${colors.dark};
  width: 100vw;
  height: 10vh;
  display: flex;
  flex-direction: row;
  
`;

export const LogoContainer = styled.div`
  background-color: ${colors.white};
  width: 20vw;
  height: 10vh;
  text-align: center;
  align-self: center;
  justify-content: center;
  align-items: center;
  display: flex;
  self-align: center;

`;
export const SearchContainer = styled.div`
  
  width: 20vw;
  height: 10vh;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  @media screen and (max-width: 600px) {display: none}
`;
export const Image = styled.img`
  height: 8vh;
`;

export const Icon = styled.img`
  height: 3vh;
  margin-right: 1rem;
  filter: invert(85%);
  @media screen and (min-width: 600px) {display: none}
`;
export default function Header(){
  const [isHovering, setIsHovering] = useState(false);
  const [isHovering1, setIsHovering1] = useState(false);
  const [isHovering2, setIsHovering2] = useState(false);
  const [isHovering3, setIsHovering3] = useState(false);
  const [burger, setBurger] = useState(false);

  const toggleBurger = () => {
    setBurger(!burger);
  };
  return(
    <>
    {burger && (
      <ModalLeft
        content={
          <ContainerAside>
            <ul className="navbar-mobile">
      <li>
        <IconContainer
          style={{
            transition: "all 0.3s",
            backgroundColor: isHovering ? "rgba(231, 233, 234, 0.1)" : "",
            color: isHovering ? "white" : "",
          }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <IconAsie src={Home} />
          <Text>Inicio</Text>
        </IconContainer>
      </li>
      <li>
        <IconContainer
          style={{
            transition: "all 0.3s",
            backgroundColor: isHovering1 ? "rgba(231, 233, 234, 0.1)" : "",
            color: isHovering1 ? "white" : "",
          }}
          onMouseEnter={() => setIsHovering1(true)}
          onMouseLeave={() => setIsHovering1(false)}
        >
          <IconAsie src={Profile} />
          <Text>Perfil</Text>
        </IconContainer>
      </li>
      <li>
        <IconContainer
          style={{
            transition: "all 0.3s",
            backgroundColor: isHovering2 ? "rgba(231, 233, 234, 0.1)" : "",
            color: isHovering2 ? "white" : "",
          }}
          onMouseEnter={() => setIsHovering2(true)}
          onMouseLeave={() => setIsHovering2(false)}
        >
          <IconAsie src={Config} />
          <Text>Preferencias</Text>
        </IconContainer>
      </li>
      <li>
        <IconContainer
          style={{
            transition: "all 0.3s",
            backgroundColor: isHovering3 ? "rgba(231, 233, 234, 0.1)" : "",
            color: isHovering3 ? "white" : "",
            position: "absolute",
            bottom: 0,
            marginBottom: "1vh",
          }}
          onMouseEnter={() => setIsHovering3(true)}
          onMouseLeave={() => setIsHovering3(false)}
        >
          <Icon src={Logout} />
          <Text>Cerrrar Sesión</Text>
        </IconContainer>
      </li>
    </ul>
          </ContainerAside>
        }
        handleClose={toggleBurger}
      />
    )}
    <Container>
    <BurgerContainer>
        
        <Icon
          onClick={toggleBurger}
          className="hamburger-label"
          src={Burger}
          alt="bars-icon"
        />
    
</BurgerContainer>
    <LogoContainer><Image alt="logo" src="https://images.pond5.com/green-screen-green-background-green-footage-088768531_iconl.jpeg"/></LogoContainer>
    <SearchContainer>
    <Icon src={Search}/>
       <input type="text" name="search" placeholder="Buscar..."/> 
    </SearchContainer>
    
     
    </Container>
    </>)
}

const IconAsie = styled.img`
  height: 3.5vh;
  margin-right: 1rem;
  filter: invert(100%);
`;

const Text = styled.p`
  font-size: 2vh;
  font-weight: 600;
  width: 8rem;
  text-align: left;
  color: ${colors.white};
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

const BurgerContainer = styled.div`
  width: 8vw;
  @media screen and (min-width: 600px) {display: none}
  flex-direction: row;
  display: flex;
  align-items: center;
  align-content: center;
  text-align: center;
  justify-content: center;
  margin-top: 1vh;
  cursor: pointer;
  margin-left: 2vh;
  margin-right: 25vh;
`;

const ContainerAside = styled.div`
  width: 30vw;
  
  /*border: 1px solid #ccc;*/
  border-radius: 0 2vw 2vw 0;
  flex-direction: row;
  display: flex;
 
`;