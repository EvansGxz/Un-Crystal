import styled from "@emotion/styled";
import { colors } from "../../Styles/colors";
import UserPicture from "../User/user-image";

const Wrapper = styled.div`
  
  flex-direction: row;
  display: flex;
  gap: 10px;
  
  padding: 10px;
 
`;
const Container = styled.div`
  background-color: ${colors.black};
  width: 70vw;
  border-radius: 20px;
  box-shadow: 0px 20px 20px rgba(57, 57, 57, 0.1);
  margin: 1rem;
  padding: 0.225rem;
`;
export const UserName = styled.p`
  line-height: 0rem;
  align-items: center;
  text-align: center;
  color: ${colors.white};
  font-weight: 600;
`;

 const UserId = styled.p`
  line-height: 0rem;
  align-items: center;
  text-align: center;
  color: ${colors.gray};
  font-weight: 500;
  font-size: 0.900rem;
  padding-left: 0.125rem;
`;

const Icon = styled.img`
  width: 1.325vw;
`;
const IconContainer = styled.div`
  padding: 0.125rem;
`;

const NameFormat = styled.div`
  flex-direction: row;
  display: flex;
`;
const BodyContainer = styled.div`
  flex-direction: row;
  display: flex;
  width: 34vw;
`;
const Body = styled.p`
margin-top: -1.225rem;
margin-left: 5vw;
align-items: center;
text-align: left;
color: ${colors.white};
font-weight: 500;
font-size: 0.900rem;
padding-left: 0.125rem;
`;

export default function CardPublish({ src, body, userId, icon, name, id, onClick }) {
  return (
    <Container>
    <Wrapper id={id}>
      <UserPicture src={src} />
      <NameFormat>
        <UserName  onClick={onClick}>
          {" "}
          {name}
          {" "}
        </UserName>
        <IconContainer>
        <Icon src={icon}/>
        </IconContainer>
        <UserId>{userId}</UserId>
      </NameFormat>
      
    </Wrapper>
    <BodyContainer>
      <Body>{body}</Body>
      </BodyContainer>
      </Container>
  );
}
