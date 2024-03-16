/* eslint-disable react/prop-types */
const PrimaryButton = (props) => {
  const {
    children,
    classname,
    type = "submit",
    onClick = () => {},
    ...rest
  } = props;
  return (
    <button
      type={type}
      onClick={onClick}
      className={`h-10 px-6 font-semibold text-ternary hover:bg-hover-primary transition duration-150 ease-in-out ${classname}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
