/* eslint-disable react/prop-types */
const Input = (props) => {
  const { type, placeholder, name } = props;
  return (
    <input
      id={name}
      type={type}
      name={name}
      placeholder={placeholder}
      className="text-sm rounded border border-secondary w-full py-2 px-3 placeholder:opacity-50"
    />
  );
};

export default Input;
