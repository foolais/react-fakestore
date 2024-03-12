/* eslint-disable react/prop-types */
const SecondaryButton = (props) => {
  const { children, classname } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold text-primary border border-primary flex items-center justify-center hover:bg-primary hover:text-ternary transition duration-150 ease-in-out ${classname}`}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
