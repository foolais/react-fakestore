import { useRef, useEffect } from "react";
import PrimaryButton from "../Elements/Button/PrimaryButton";
import InputForm from "../Elements/Input";

const FormRegister = () => {
  const emailRef = useRef(null);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  return (
    <form>
      <InputForm
        label="Email"
        type="email"
        name="email"
        placeholder="Johndoe17@gmail.com"
        isWithLabel={true}
        ref={emailRef}
      />
      <InputForm
        label="Username"
        type="text"
        name="username"
        placeholder="Johndoe"
        isWithLabel={true}
      />
      <InputForm
        label="Password"
        type="password"
        name="password"
        placeholder="*****"
        isWithLabel={true}
        autoComplete="new-password"
      />
      <InputForm
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        placeholder="*****"
        isWithLabel={true}
        autoComplete="new-password"
      />
      <PrimaryButton classname="bg-primary w-full rounded-md  mt-3">
        Register
      </PrimaryButton>
    </form>
  );
};

export default FormRegister;
