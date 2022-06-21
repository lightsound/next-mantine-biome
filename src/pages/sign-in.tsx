import type { CustomNextPage } from "next";
import { AuthLayout } from "src/layout";

const SignIn: CustomNextPage = () => {
  return <div>sign in</div>;
};

SignIn.getLayout = AuthLayout;

export default SignIn;
