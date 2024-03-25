/* eslint-disable react/prop-types */
import { AiOutlineDelete } from "react-icons/ai";
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
      className="w-full min-h-44 max-h-44 h-full object-cover object-top rounded-lg shadow-md"
    />
  );
};

const Description = (props) => {
  const {
    children,
    description,
    showNavigate = false,
    onClick = () => {},
  } = props;
  return (
    <>
      <div className="flex justify-between gap-6 font-semibold mb-2">
        {children}
      </div>
      <div className="w-10/12">
        <p className="text-sm text-justify">
          {description}
          {showNavigate && (
            <span
              onClick={onClick}
              className="text-primary font-semibold cursor-pointer"
            >
              Read more
            </span>
          )}
        </p>
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

const DeleteIcon = ({ onClick }) => {
  return (
    <div
      className="p-1 flex items-center justify-center rounded-full border-2 border-red-500 text-secondary hover:bg-red-500 hover:text-ternary cursor-pointer"
      onClick={onClick}
    >
      <AiOutlineDelete />
    </div>
  );
};

CardProduct.Image = Image;
CardProduct.Description = Description;
CardProduct.Title = Title;
CardProduct.Price = Price;
CardProduct.DeleteIcon = DeleteIcon;

export default CardProduct;
