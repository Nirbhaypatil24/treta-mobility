import { Helmet } from 'react-helmet-async';
import AuthForm from '../../components/AuthForm';

export default function SignupPage() {
  return (
    <>
      <Helmet>
        <title>Create Account – Treta Mobility</title>
      </Helmet>
      <AuthForm mode="signup" />
    </>
  );
}
