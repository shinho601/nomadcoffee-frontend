import AuthLayout from '../components/auth/AuthLayout';
import BottomBox from '../components/auth/BottomBox';
import Button from '../components/auth/Button';
import FormBox from '../components/auth/FormBox';
import HeaderContainer from '../components/auth/HeaderContainer';
import Input from '../components/auth/Input';
import routes from '../routes';
import PageTitle from '../components/PageTitle';

function SignUp() {
  return (
    <AuthLayout>
      <PageTitle title="sign up" />
      <FormBox>
        <HeaderContainer subtitle="Sign up to see photos and videos from your friends."></HeaderContainer>
        <form>
          <Input type="text" placeholder="Name" />
          <Input type="text" placeholder="Email" />
          <Input type="text" placeholder="Username" />
          <Input type="password" placeholder="Password" />
          <Button type="submit" value="Sign up" />
        </form>
      </FormBox>
      <BottomBox cta="Have an account?" linkText="Log in" link={routes.home} />
    </AuthLayout>
  );
}

export default SignUp;
