import styled from "@emotion/styled";
import CardPublish from "../Card/card";
import User from "../../assets/user_me.png"
import Verify from "../../assets/verify/verify.png"
import AsideBar from "./aside";
import { Section } from "./section";
import NewsBar from "./news";


export const Container = styled.div`
  display: flex;
`;

export default function Main(){
  return(
    <Container>
      <AsideBar/>
      <Section>
      <CardPublish
        id= "1"
        name="Evans Glz"
        src={User}
        onClick={()=>console.log("hola")}
        icon={Verify}
        userId="@EvansGxz"
        body="Deserunt esse cillum anim proident qui. Ipsum ut minim quis irure est sunt velit ipsum nostrud non commodo ut ipsum nulla. Pariatur tempor reprehenderit sunt reprehenderit veniam."
        />
      </Section>
      <NewsBar/>
    </Container>
  )
}
