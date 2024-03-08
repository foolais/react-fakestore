import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormRegister = () => {
  return (
    <form>
      <InputForm
        label="Email"
        type="email"
        name="email"
        placeholder="Johndoe17@gmail.com"
      />
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
      <InputForm
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        placeholder="password"
      />
      <Button classname="bg-primary w-full mt-3">Register</Button>
    </form>
  );
};

export default FormRegister;
