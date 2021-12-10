import styled from "styled-components";
import { isLoggedInVar, darkModeVar } from "../apollo";

const Title = styled.h1`
  color: ${(props) => props.theme.fontColor};
`;
const Container = styled.div``;
function Login() {
  return (
    <Container>
      <Title>Login</Title>
      <button onClick={() => darkModeVar(true)}>To dark</button>
      <button onClick={() => darkModeVar(false)}>To light</button>
      <button onClick={() => isLoggedInVar(true)}>Log in now!</button>
    </Container>
  );
}
export default Login;
