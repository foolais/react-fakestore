import PrimaryButton from "../Elements/Button/PrimaryButton";
import InputForm from "../Elements/Input";

const FormLogin = () => {
  return (
    <form>
      <InputForm
        label="Username"
        type="text"
        name="username"
        placeholder="John Doe"
        isWithLabel={true}
      />
      <InputForm
        label="Password"
        type="password"
        name="password"
        placeholder="*****"
        isWithLabel={true}
      />
      <PrimaryButton classname="bg-primary w-full mt-3 rounded-md ">
        Login
      </PrimaryButton>
    </form>
  );
};

export default FormLogin;
