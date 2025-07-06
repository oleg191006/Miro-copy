import { ROUTES } from '@/shared/model/routes';
import { Link } from 'react-router-dom';
import { AuthLayout } from './auth-layout';
import { LoginForm } from './login-form';

function LoginPage() {
  return (
    <AuthLayout
      title="Login to the system"
      description="Type your email and password to login to the system"
      form={<LoginForm />}
      footerText={
        <>
          Don't have an account?
          <Link className="underline text-primary" to={ROUTES.REGISTER}>
            Register
          </Link>
        </>
      }
    />

    // <main className="grow flex flex-col pt-[200px] items-center">
    //   <Card className="w-full max-w-[400px]">
    //     <CardHeader>
    //       <CardTitle>Login to the system</CardTitle>
    //       <CardDescription>
    //         Type your email and password to login to the system
    //       </CardDescription>
    //     </CardHeader>
    //     <CardContent></CardContent>
    //     <CardFooter>
    //       <p className="text-sm text-muted-foreground">
    //         Don't have an account?{" "}
    //         <Link className="underline text-primary" to={ROUTES.REGISTER}>
    //           Register
    //         </Link>
    //       </p>
    //     </CardFooter>
    //   </Card>
    // </main>
  );
}

export const Component = LoginPage;
