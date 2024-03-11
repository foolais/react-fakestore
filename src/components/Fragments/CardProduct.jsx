/* eslint-disable react/prop-types */
import shoes from "../../../public/images/shoes";

const CardProduct = (props) => {
  const { children } = props;
  return <div className="bg-ternary rounded-md p-4 w-[49%]">{children}</div>;
};

const Image = () => {
  return (
    <img
      src={shoes}
      alt="shoes"
      className="w-full min-h-40 h-full object-cover object-center rounded-lg"
    />
  );
};

const Description = (props) => {
  const { children } = props;
  return (
    <>
      <div className="flex gap-6 font-semibold mb-2">{children}</div>
      <div className="w-10/12">
        <p className="text-sm text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
          corporis!
        </p>
      </div>
    </>
  );
};

const Title = () => {
  return <h3 className="text-lg font-semibold">Coffe Latte</h3>;
};

const Price = () => {
  return <span className="text-primary">$ 14.00</span>;
};

CardProduct.Image = Image;
CardProduct.Description = Description;
CardProduct.Title = Title;
CardProduct.Price = Price;

export default CardProduct;
