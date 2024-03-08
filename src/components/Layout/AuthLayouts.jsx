/* eslint-disable react/prop-types */
import Title from "../Elements/Title";
import background from "../../assets/background";

const AuthLayouts = (props) => {
  const { message, children } = props;
  return (
    <div className="w-full max-h-screen flex">
      <div className="w-[40%] flex flex-col justify-center p-20">
        <Title classname="mb-3 text-center text-2xl" />
        <p className="font-bold text-3xl mb-5 text-center">{message}</p>
        {children}
      </div>
      <div className="w-[60%]">
        <img
          src={background}
          alt="background"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </div>
  );
};

export default AuthLayouts;
