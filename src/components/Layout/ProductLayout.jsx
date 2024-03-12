import shoes from "../../assets/shoes";
import SecondaryButton from "../Elements/Button/SecondaryButton";
import Counter from "../Elements/Counter";
import CardProduct from "../Fragments/CardProduct";

const products = [
  {
    id: 1,
    title: "Matcha Latte",
    price: 14.0,
    image: shoes,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quam porro velit dolorum consequuntur voluptatum.",
  },
  {
    id: 2,
    title: "Coffe Latte",
    price: 15.0,
    image: shoes,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quam porro velit dolorum consequuntur voluptatum.",
  },
  {
    id: 3,
    title: "Caramel Latte",
    price: 13.0,
    image: shoes,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quam porro velit dolorum consequuntur voluptatum.",
  },
  {
    id: 4,
    title: "Hazelnut Latte",
    price: 13.0,
    image: shoes,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quam porro velit dolorum consequuntur voluptatum.",
  },
  {
    id: 3,
    title: "Red Velvet",
    price: 13.0,
    image: shoes,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quam porro velit dolorum consequuntur voluptatum.",
  },
];

const ProductLayout = () => {
  return (
    <div className="flex flex-wrap w-full gap-4">
      {products.map((product) => {
        return (
          <CardProduct key={product.id}>
            <div className="flex w-full">
              <div className="w-1/3">
                <CardProduct.Image src={product.image} />
              </div>
              <div className="w-2/3 flex flex-col py-2 px-4">
                <CardProduct.Description description={product.description}>
                  <CardProduct.Title title={product.title} />
                  <CardProduct.Price price={product.price} />
                </CardProduct.Description>
              </div>
            </div>
            <div className="flex">
              <Counter classname="w-1/3" />
              <div className="w-2/3">
                <SecondaryButton classname="w-10/12 rounded-2xl">
                  Add to Cart
                </SecondaryButton>
              </div>
            </div>
          </CardProduct>
        );
      })}
    </div>
  );
};

export default ProductLayout;
