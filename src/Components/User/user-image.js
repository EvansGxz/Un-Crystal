import styled from "@emotion/styled";

const Image = styled.img`
  border-radius: 50%;
  width: 3vw;
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.2);
`;

const Wrapper = styled.div`

  height: 100%;
  width: 4vw;
`;

export default function UserPicture({ src }) {
  return(
    <Wrapper>

    <Image src={src} />;
    </Wrapper>
  ) 
}
