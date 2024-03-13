/* eslint-disable react/prop-types */
import { formatUSDCurrency } from "../../utils/utils";

const CardProduct = (props) => {
  const { children, classname } = props;
  return (
    <div className={`bg-ternary rounded-md p-4  ${classname}`}>{children}</div>
  );
};

const Image = ({ src }) => {
  return (
    <img
      src={src}
      alt="shoes"
      className="w-full min-h-32 h-full object-cover object-center rounded-lg shadow-md"
    />
  );
};

const Description = (props) => {
  const { children, description } = props;
  return (
    <>
      <div className="flex gap-6 font-semibold mb-2">{children}</div>
      <div className="w-10/12">
        <p className="text-sm text-justify">{description}</p>
      </div>
    </>
  );
};

const Title = (props) => {
  const { title, classname } = props;
  return <h3 className={`font-semibold text-lg ${classname}`}>{title}</h3>;
};

const Price = ({ price }) => {
  return (
    <span className="text-primary font-semibold">
      {formatUSDCurrency(price)}
    </span>
  );
};

CardProduct.Image = Image;
CardProduct.Description = Description;
CardProduct.Title = Title;
CardProduct.Price = Price;

export default CardProduct;
