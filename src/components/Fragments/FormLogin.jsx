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
        isWithLabel={true}
      />
      <InputForm
        label="Password"
        type="password"
        name="password"
        placeholder="*****"
        isWithLabel={true}
      />
      <Button classname="bg-primary w-full mt-3 rounded-md ">Login</Button>
    </form>
  );
};

export default FormLogin;
