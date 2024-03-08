import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
  return (
    <form>
      <InputForm
        label="Username"
        type="text"
        name="username"
        placeholder="John Doe"
      />
      <InputForm
        label="Password"
        type="password"
        name="password"
        placeholder="*****"
      />
      <Button classname="bg-primary w-full">Login</Button>
    </form>
  );
};

export default FormLogin;
