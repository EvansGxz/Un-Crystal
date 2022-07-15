import styled from "@emotion/styled";
import { colors } from "../../Styles/colors";


export const News = styled.div`
  background-color: ${colors.ligthPurple};
  width: 20vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-left: 1px solid #ccc;
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

export default function NewsBar(){

  return(
    <News>
    
    </News>
  )
}