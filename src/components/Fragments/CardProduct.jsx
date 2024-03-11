/* eslint-disable react/prop-types */

const CardProduct = (props) => {
  const { children } = props;
  return <div className="bg-ternary rounded-md p-4 w-[49%]">{children}</div>;
};

const Image = ({ src }) => {
  return (
    <img
      src={src}
      alt="shoes"
      className="w-full min-h-40 h-full object-cover object-center rounded-lg"
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

const Title = ({ title }) => {
  return <h3 className="text-lg font-semibold">{title}</h3>;
};

const Price = ({ price }) => {
  return <span className="text-primary">$ {price}</span>;
};

CardProduct.Image = Image;
CardProduct.Description = Description;
CardProduct.Title = Title;
CardProduct.Price = Price;

export default CardProduct;
