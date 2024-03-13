/* eslint-disable react/prop-types */
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Counter = (props) => {
  const { id, value, handleCounter = () => {}, classname } = props;

  return (
    <div className={`flex items-center justify-center  ${classname}`}>
      <div
        onClick={() => handleCounter("MIN", id)}
        className="text-secondary border border-slate-400 rounded-full h-max p-1.5 cursor-pointer hover:bg-secondary hover:text-ternary transition duration-150 ease-in-out"
      >
        <AiOutlineMinus size="10" />
      </div>
      <span className="font-semibold">{value}</span>
      <div
        onClick={() => handleCounter("ADD", id)}
        className="text-secondary border border-slate-400 rounded-full h-max p-1.5 cursor-pointer hover:bg-secondary hover:text-ternary transition duration-150 ease-in-out"
      >
        <AiOutlinePlus size="10" />
      </div>
    </div>
  );
};

export default Counter;
