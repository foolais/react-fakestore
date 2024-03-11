/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const Title = ({ classname }) => {
  return (
    <Link to={"/"}>
      <h1 className={`font-bold ${classname}`}>
        <span className="text-primary">Re</span>
        Fake
        <span className="text-primary">Store</span>
      </h1>
    </Link>
  );
};

export default Title;
