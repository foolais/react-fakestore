import { useNavigate } from "react-router-dom";
import PrimaryButton from "../Elements/Button/PrimaryButton";
import InputForm from "../Elements/Input";

const FormLogin = () => {
  const navigate = useNavigate();
  const handleLogin = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    console.log(username.length);
    if (username.length >= 3 && password.length > 0) {
      localStorage.setItem("user", event.target.username.value);
      navigate("/");
    } else {
      if (username.length < 3) {
        alert("username minimal 3 karakter");
      } else {
        alert("password wajib diisi");
      }
    }
  };

  return (
    <form onSubmit={handleLogin}>
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
      />
      <PrimaryButton
        classname="bg-primary w-full mt-3 rounded-md"
        type="submit"
      >
        Log in
      </PrimaryButton>
    </form>
  );
};

export default FormLogin;
