import FormLogin from "../components/Fragments/FormLogin";
import AuthLayouts from "../components/Layout/AuthLayouts";

const LoginPage = () => {
  return (
    <AuthLayouts message="Welcome Back" type="login">
      <FormLogin />
    </AuthLayouts>
  );
};

export default LoginPage;
