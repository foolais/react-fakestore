/* eslint-disable react/prop-types */
import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Counter = (props) => {
  const { classname, value } = props;

  const [counter, setCounter] = useState(value);

  const handleChange = (type) => {
    if (type === "MIN" && counter === 1) return;
    setCounter((prev) => (type === "ADD" ? prev + 1 : prev - 1));
  };

  return (
    <div className={`flex items-center justify-center  ${classname}`}>
      <div
        onClick={() => handleChange("MIN")}
        className="text-secondary border border-slate-400 rounded-full h-max p-1.5 cursor-pointer hover:bg-secondary hover:text-ternary transition duration-150 ease-in-out"
      >
        <AiOutlineMinus size="10" />
      </div>
      <span className="font-semibold">{counter}</span>
      <div
        onClick={() => handleChange("ADD")}
        className="text-secondary border border-slate-400 rounded-full h-max p-1.5 cursor-pointer hover:bg-secondary hover:text-ternary transition duration-150 ease-in-out"
      >
        <AiOutlinePlus size="10" />
      </div>
    </div>
  );
};

export default Counter;
