import shoes from "../../assets/shoes";
import SecondaryButton from "../Elements/Button/SecondaryButton";
import Counter from "../Elements/Counter";
import CardProduct from "../Fragments/CardProduct";
import { useDispatch } from "react-redux";
import { handleAddToCart } from "../../redux/slice/cartSlice";
import { useState } from "react";

const dummyProducts = [
  {
    id: 1,
    title: "Matcha Latte",
    price: 14,
    image: shoes,
    quantity: 1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quam porro velit dolorum consequuntur voluptatum.",
  },
  {
    id: 2,
    title: "Coffe Latte",
    price: 15,
    image: shoes,
    quantity: 1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quam porro velit dolorum consequuntur voluptatum.",
  },
  {
    id: 3,
    title: "Caramel Latte",
    price: 13,
    image: shoes,
    quantity: 1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quam porro velit dolorum consequuntur voluptatum.",
  },
  {
    id: 4,
    title: "Hazelnut Latte",
    price: 12,
    image: shoes,
    quantity: 1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quam porro velit dolorum consequuntur voluptatum.",
  },
  {
    id: 5,
    title: "Red Velvet",
    price: 14.5,
    image: shoes,
    quantity: 1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quam porro velit dolorum consequuntur voluptatum.",
  },
];

const ProductLayout = () => {
  const dispatch = useDispatch();

  const [products, setProducts] = useState(dummyProducts);

  const handleCounter = (type, id) => {
    const newProducts = products.map((item) => {
      if (item.id === id) {
        const newItem = { ...item };
        if (type === "ADD") {
          newItem.quantity = item.quantity + 1;
        } else {
          newItem.quantity = item.quantity - 1;
        }
        return newItem;
      }
      return item;
    });
    setProducts(newProducts);
  };

  return (
    <div className="w-[65%] bg-gray-200 relative">
      <div className="w-full bg-ternary h-20 border-b-2 border-r-2 border-slate-200 sticky top-0 shadow-sm"></div>
      <div className="flex flex-wrap w-full gap-4 p-4">
        {products.map((product) => {
          return (
            <CardProduct key={product.id} classname="w-[49%]">
              <div className="flex w-full mb-4">
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
                <Counter
                  id={product.id}
                  value={product.quantity}
                  handleCounter={handleCounter}
                  classname="w-1/3 gap-4"
                />
                <div className="w-2/3">
                  <SecondaryButton
                    classname="w-10/12 rounded-2xl"
                    onClick={() => dispatch(handleAddToCart(product))}
                  >
                    Add to Cart
                  </SecondaryButton>
                </div>
              </div>
            </CardProduct>
          );
        })}
      </div>
    </div>
  );
};

export default ProductLayout;
