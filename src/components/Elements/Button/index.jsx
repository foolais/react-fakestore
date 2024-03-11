/* eslint-disable react/prop-types */
const Button = (props) => {
  const { children, classname } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold text-ternary hover:bg-hover-primary transition duration-150 ease-in-out ${classname}`}
    >
      {children}
    </button>
  );
};

export default Button;
