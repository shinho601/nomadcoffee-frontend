import { gql, useMutation } from '@apollo/client';
import AuthLayout from '../components/auth/AuthLayout';
import BottomBox from '../components/auth/BottomBox';
import Button from '../components/auth/Button';
import FormBox from '../components/auth/FormBox';
import HeaderContainer from '../components/auth/HeaderContainer';
import Input from '../components/auth/Input';
import routes from '../routes';
import PageTitle from '../components/PageTitle';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

const CREATE_ACCOUNT_MUTATION = gql`
  mutation createAccount(
    $username: String!
    $email: String!
    $name: String!
    $password: String!
  ) {
    createAccount(
      username: $username
      email: $email
      name: $name
      password: $password
    ) {
      ok
      error
    }
  }
`;

function SignUp() {
  const history = useHistory();
  const onCompleted = (data) => {
    const {
      createAccount: { ok, error },
    } = data;
    if (!ok) {
      return;
    }
    history.push(routes.home);
  };
  const [createAccount, { loading }] = useMutation(CREATE_ACCOUNT_MUTATION, {
    onCompleted,
  });
  const {
    register,
    handleSubmit,
    formState,
    getValues,
    setError,
    clearErrors,
  } = useForm({ mode: 'onChange' });

  const onSubmitValid = (data) => {
    if (loading) {
      return;
    }
    createAccount({
      variables: { ...data },
    });
  };

  return (
    <AuthLayout>
      <PageTitle title="sign up" />
      <FormBox>
        <HeaderContainer subtitle="Sign up to see photos and videos from your friends."></HeaderContainer>
        <form onSubmit={handleSubmit(onSubmitValid)}>
          {/* username: $username
      email: $email
      name: $name
      password: $password */}

          <Input
            {...register('name', { required: 'Name is required.' })}
            type="text"
            placeholder="Name"
          />
          <Input
            {...register('email', { required: 'Email is required.' })}
            type="text"
            placeholder="Email"
          />
          <Input
            {...register('username', { required: 'Username is required.' })}
            type="text"
            placeholder="Username"
          />
          <Input
            {...register('password', { required: 'Password is required.' })}
            type="password"
            placeholder="Password"
          />
          <Button
            type="submit"
            value={loading ? 'Waiting...' : 'Sign up'}
            disabled={!formState.isValid || loading}
          />
        </form>
      </FormBox>
      <BottomBox cta="Have an account?" linkText="Log in" link={routes.home} />
    </AuthLayout>
  );
}

export default SignUp;
