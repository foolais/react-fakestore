/* eslint-disable react/prop-types */
const TextIcon = (props) => {
  const { children, title, onClick = () => {} } = props;
  return (
    <div
      className="flex gap-2 items-center cursor-pointer group hover:text-primary transition duration-150 ease-in-out"
      onClick={onClick}
    >
      <div>{children}</div>
      <span className="group-hover:font-semibold">{title}</span>
    </div>
  );
};

export default TextIcon;
