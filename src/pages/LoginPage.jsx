import FormLogin from "../components/Fragments/FormLogin";
import AuthLayouts from "../components/Layout/AuthLayouts";

const LoginPage = () => {
  return (
    <AuthLayouts message="Welcome Back">
      <FormLogin />
      <p className="text-secondary text-sm mt-4 font-medium">
        Don&apos;t have an account?{" "}
        <span className="text-primary cursor-pointer">Register</span>
      </p>
    </AuthLayouts>
  );
};

export default LoginPage;
