/* eslint-disable react/prop-types */
const Button = (props) => {
  const { children, classname } = props;
  return (
    <button
      className={`h-10 px-6 rounded-md font-semibold text-ternary hover:bg-hover-primary ${classname}`}
    >
      {children}
    </button>
  );
};

export default Button;
