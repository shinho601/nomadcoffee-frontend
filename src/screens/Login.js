import styled from 'styled-components';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import routes from '../routes';
import AuthLayout from '../components/auth/AuthLayout';
import BottomBox from '../components/auth/BottomBox';
import Button from '../components/auth/Button';
import FormBox from '../components/auth/FormBox';
import Input from '../components/auth/Input';
import Separator from '../components/auth/Separator';
import HeaderContainer from '../components/auth/HeaderContainer';
import PageTitle from '../components/PageTitle';
import { useForm } from 'react-hook-form';

const GithubLogin = styled.div`
  color: #385285;
  span {
    margin-left: 10px;
    font-weight: 600;
  }
`;

function Login() {
  const { register, handleSubmit } = useForm();
  const onSubmitValid = (data) => {
    console.log(data);
  };
  const onSubmitInvalid = (data) => {
    console.log(data, 'invalid');
  };
  return (
    <AuthLayout>
      <PageTitle title="login" />
      <FormBox>
        <HeaderContainer title="Nomadccino"></HeaderContainer>
        <form onSubmit={handleSubmit(onSubmitValid, onSubmitInvalid)}>
          <Input
            {...register('username', {
              required: 'Username is required',
              minLength: 5,
            })}
            type="text"
            placeholder="Username"
          />
          <Input
            {...register('password', {
              required: 'Password is required',
            })}
            type="password"
            placeholder="Password"
          />
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
