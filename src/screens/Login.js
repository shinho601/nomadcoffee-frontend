import styled from 'styled-components';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const WhiteBox = styled.div`
  background-color: white;
  border: 1px solid ${(props) => props.theme.borderColor};
  width: 100%;
`;

const TopBox = styled(WhiteBox)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 35px 40px 25px 40px;
  margin-bottom: 10px;
  form {
    margin-top: 35px;
    width: 100%;
    display: flex;
    justify-items: center;
    flex-direction: column;
    align-items: center;
  }
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  div {
    margin-top: 5px;
    font-weight: bold;
    font-size: 2rem;
  }
`;
const Input = styled.input`
  width: 100%;
  border-radius: 3px;
  padding: 7px;
  background-color: #fafafa;
  border: 0.5px solid ${(props) => props.theme.borderColor};
  margin-top: 5px;
  box-sizing: border-box;
  &::placeholder {
    font-size: 12px;
  }
`;

const Button = styled.input`
  border: none;
  border-radius: 3px;
  margin-top: 12px;
  background-color: ${(props) => props.theme.accent};
  margin-left: 5px;
  color: ${(props) => props.theme.accent};
  text-align: center;
  padding: 8px 0px;
  font-weight: 600;
  width: 100%;
`;

const BottomBox = styled(WhiteBox)`
  padding: 20px 0px;
  text-align: center;
  a {
    font-weight: 600;
    color: #0095f6;
  }
`;

const Wrapper = styled.div`
  max-width: 350px;
  width: 100%;
`;

const Separator = styled.div`
  margin: 20px 0px 30px 0px;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  div {
    width: 100%;
    height: 1px;
    background-color: ${(props) => props.theme.borderColor};
  }
  span {
    margin: 0px 10px;
    font-weight: 600;
    font-size: 12px;
    color: #8e8e8e;
  }
`;

const GithubLogin = styled.div`
  color: #385285;
  span {
    margin-left: 10px;
    font-weight: 600;
  }
`;

function Login() {
  return (
    <Container>
      <Wrapper>
        <TopBox>
          <Logo>
            <FontAwesomeIcon icon={faMugHot} size="3x" />
            <div>Nomadccino</div>
          </Logo>
          <form>
            <Input type="text" placeholder="Username" />
            <Input type="password" placeholder="Password" />
            <Button type="submit" value="Log in" />
          </form>
          <Separator>
            <div></div>
            <span>Or</span>
            <div></div>
          </Separator>
          <GithubLogin>
            <FontAwesomeIcon icon={faGithub} />
            <span>Log in with Github</span>
          </GithubLogin>
        </TopBox>
        <BottomBox>
          <span>Don't have an account?</span>
          <Link to="/sign-up">Sign up</Link>
        </BottomBox>
      </Wrapper>
    </Container>
  );
}
export default Login;
