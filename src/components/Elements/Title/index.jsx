/* eslint-disable react/prop-types */
const Title = ({ classname }) => {
  return (
    <h1 className={`font-bold ${classname}`}>
      <span className="text-primary">Re</span>
      Fake
      <span className="text-primary">Store</span>
    </h1>
  );
};

export default Title;
