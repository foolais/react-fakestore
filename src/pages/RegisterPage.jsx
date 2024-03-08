import { Link } from "react-router-dom";
import FormRegister from "../components/Fragments/FormRegister";
import AuthLayouts from "../components/Layout/AuthLayouts";

const RegisterPage = () => {
  return (
    <AuthLayouts message="Welcome to RefakeStore">
      <FormRegister />
      <p className="text-secondary text-sm mt-4 font-medium">
        Already have an account?{" "}
        <Link to={"/login"}>
          <span className="text-primary cursor-pointer">Login</span>
        </Link>
      </p>
    </AuthLayouts>
  );
};

export default RegisterPage;
