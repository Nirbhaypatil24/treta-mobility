import { Helmet } from 'react-helmet-async';
import AuthForm from '../../components/AuthForm';

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title>Sign In – Treta Mobility</title>
      </Helmet>
      <AuthForm mode="login" />
    </>
  );
}
