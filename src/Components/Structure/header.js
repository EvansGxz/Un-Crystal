import styled from "@emotion/styled";
import { colors } from "../../Styles/colors";
import './input.css';
import Search from "../../assets/Header/loupe.png"

export const Container = styled.div`
  background-color: ${colors.dark};
  width: 100vw;
  height: 10vh;
  display: flex;
  flex-direction: row;
`;

export const LogoContainer = styled.div`
  background-color: ${colors.dark};
  width: 20vw;
  height: 10vh;
  text-align: center;
`;
export const SearchContainer = styled.div`
  
  width: 20vw;
  height: 10vh;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
`;
export const Image = styled.img`
  height: 10vh;
`;

export const Icon = styled.img`
  height: 3vh;
  margin-right: 1rem;
  filter: invert(85%);
`;
export default function Header(){

  return(
    <Container>
    <LogoContainer><Image alt="logo" src="https://images.pond5.com/green-screen-green-background-green-footage-088768531_iconl.jpeg"/></LogoContainer>
    <SearchContainer>
    <Icon src={Search}/>
       <input type="text" name="search" placeholder="Buscar..."/> 
    </SearchContainer>
    </Container>
  )
}