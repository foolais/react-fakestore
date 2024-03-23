/* eslint-disable react/prop-types */
import { forwardRef } from "react";
import Input from "./Input";
import Label from "./Label";

const InputForm = forwardRef((props, ref) => {
  const {
    label,
    type,
    name,
    placeholder,
    isWithLabel = false,
    autoComplete,
  } = props;
  return (
    <div className="mb-4">
      {isWithLabel && <Label htmlFor={name}>{label}</Label>}
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        autoComplete={autoComplete}
        ref={ref}
      />
    </div>
  );
});

InputForm.displayName = "InputForm";

export default InputForm;
