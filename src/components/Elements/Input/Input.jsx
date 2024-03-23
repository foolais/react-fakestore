import { forwardRef } from "react";

/* eslint-disable react/prop-types */
const Input = forwardRef((props, ref) => {
  const { type, placeholder, name, autoComplete = "off" } = props;
  return (
    <input
      id={name}
      type={type}
      name={name}
      placeholder={placeholder}
      className="text-sm rounded w-full py-2 px-3 placeholder:opacity-50 focus:outline-none focus:border focus:border-primary "
      autoComplete={autoComplete}
      ref={ref}
    />
  );
});
Input.displayName = "Input";

export default Input;
