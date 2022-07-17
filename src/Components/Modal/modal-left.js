import styled from "@emotion/styled";

export const ModalLeft = props => {
  return (
    <Container>
      <Box>
        <Close className="close-icon" onClick={props.handleClose}>x</Close>
        {props.content}
      </Box>
    </Container>
  );
};

export const Container = styled.div`

`;
 
export const Box = styled.div`
  position: absolute;
width: 50vw;
height: 110vh;
background: #000;
border-radius: 4px;
border: 1px solid #999;
overflow: auto;
`;

export const Close = styled.span`
  content: 'x';
  cursor: pointer;
  position: fixed;
  right: calc(100px);
  top: calc(100vh - 85vh - 33px);
  background: #ededed;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  line-height: 20px;
  text-align: center;
  border: 1px solid #999;
  font-size: 20px;
`;
