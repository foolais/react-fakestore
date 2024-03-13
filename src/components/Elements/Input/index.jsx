/* eslint-disable react/prop-types */
import Input from "./Input";
import Label from "./Label";

const InputForm = (props) => {
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
      />
    </div>
  );
};

export default InputForm;
