/* eslint-disable react/prop-types */
const PrimaryButton = (props) => {
  const { children, classname, type = "submit", onClick = () => {} } = props;
  return (
    <button
      type={type}
      onClick={() => onClick()}
      className={`h-10 px-6 font-semibold text-ternary hover:bg-hover-primary transition duration-150 ease-in-out ${classname}`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
