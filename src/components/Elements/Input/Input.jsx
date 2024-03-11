/* eslint-disable react/prop-types */
const Input = (props) => {
  const { type, placeholder, name } = props;
  return (
    <input
      id={name}
      type={type}
      name={name}
      placeholder={placeholder}
      className="text-sm rounded w-full py-2 px-3 placeholder:opacity-50 focus:outline-none focus:border focus:border-primary "
    />
  );
};

export default Input;
