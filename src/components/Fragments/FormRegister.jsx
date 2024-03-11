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
        isWithLabel={true}
      />
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
      <InputForm
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        placeholder="*****"
        isWithLabel={true}
      />
      <Button classname="bg-primary w-full rounded-md  mt-3">Register</Button>
    </form>
  );
};

export default FormRegister;
