import FormRegister from "../components/Fragments/FormRegister";
import AuthLayouts from "../components/Layout/AuthLayouts";

const RegisterPage = () => {
  return (
    <AuthLayouts message="Welcome to RefakeStore">
      <FormRegister />
      <p className="text-secondary text-sm mt-4 font-medium">
        Already have an account?{" "}
        <span className="text-primary cursor-pointer">Login</span>
      </p>
    </AuthLayouts>
  );
};

export default RegisterPage;
