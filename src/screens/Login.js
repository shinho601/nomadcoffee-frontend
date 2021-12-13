import styled from 'styled-components';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import routes from '../routes';
import AuthLayout from '../components/auth/AuthLayout';
import BottomBox from '../components/auth/BottomBox';
import Button from '../components/auth/Button';
import FormBox from '../components/auth/FormBox';
import Input from '../components/auth/Input';
import Separator from '../components/auth/Separator';

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

const GithubLogin = styled.div`
  color: #385285;
  span {
    margin-left: 10px;
    font-weight: 600;
  }
`;

function Login() {
  return (
    <AuthLayout>
      <FormBox>
        <Logo>
          <FontAwesomeIcon icon={faMugHot} size="3x" />
          <div>Nomadccino</div>
        </Logo>
        <form>
          <Input type="text" placeholder="Username" />
          <Input type="password" placeholder="Password" />
          <Button type="submit" value="Log in" />
        </form>
        <Separator />
        <GithubLogin>
          <FontAwesomeIcon icon={faGithub} />
          <span>Log in with Github</span>
        </GithubLogin>
      </FormBox>
      <BottomBox
        cta="Don't have an account?"
        linkText="Sign up"
        link={routes.signUp}
      />
    </AuthLayout>
  );
}
export default Login;
