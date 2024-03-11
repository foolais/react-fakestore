/* eslint-disable react/prop-types */
import Title from "../Elements/Title";
import background from "../../assets/background";
import { Link } from "react-router-dom";

const AuthLayouts = (props) => {
  const { message, children, type } = props;
  return (
    <div className="h-screen flex">
      <div className="w-full lg:w-1/2 xl:w-1/3 h-full flex flex-col items-center py-20 bg-slate-100">
        <div className="flex flex-col w-3/4">
          <Title classname="mb-3 text-center text-2xl" />
          <p className="font-bold text-3xl mb-5 text-center">{message}</p>
          {children}
          <Navigation type={type} />
        </div>
      </div>
      <div className="lg:w-1/2 xl:w-2/3">
        <img
          src={background}
          alt="background"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </div>
  );
};

const Navigation = ({ type }) => {
  return (
    <p className="text-secondary text-center text-sm mt-4 font-semibold">
      {type === "login"
        ? "Don't have an account? "
        : "Already have an account? "}
      <Link to={type === "login" ? "/register" : "/login"}>
        <span className="text-primary cursor-pointer">
          {type === "login" ? "Login" : "Register"}
        </span>
      </Link>
    </p>
  );
};

export default AuthLayouts;
