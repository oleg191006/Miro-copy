import { ROUTES } from '@/shared/model/routes';
import { Link } from 'react-router-dom';
import { AuthLayout } from './auth-layout';
import { RegisterForm } from './register-form';

function RegisterPage() {
  return (
    <AuthLayout
      title="Register"
      description="Type your email and password to register to the system"
      form={<RegisterForm />}
      footerText={
        <>
          Already have an account?
          <Link className="underline text-primary" to={ROUTES.LOGIN}>
            Login
          </Link>
        </>
      }
    />
  );
}

export const Component = RegisterPage;
