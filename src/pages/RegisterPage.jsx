import FormRegister from "../components/Fragments/FormRegister";
import AuthLayouts from "../components/Layout/AuthLayouts";

const RegisterPage = () => {
  return (
    <AuthLayouts message="Welcome to RefakeStore" type="register">
      <FormRegister />
    </AuthLayouts>
  );
};

export default RegisterPage;
