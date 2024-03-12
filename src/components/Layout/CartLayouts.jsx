import shoes from "../../assets/shoes";
import Counter from "../Elements/Counter";
import CardProduct from "../Fragments/CardProduct";
import NavbarUser from "../Fragments/NavbarUser";

const products = [
  {
    id: 1,
    title: "Matcha Latte",
    price: "12.00",
    image: shoes,
  },
  {
    id: 2,
    title: "Red Velvet",
    price: "11.00",
    image: shoes,
  },
  {
    id: 3,
    title: "Coffe Latte",
    price: "14.00",
    image: shoes,
  },
];

const CartLayouts = () => {
  return (
    <div className="w-1/5 bg-ternary relative">
      <NavbarUser />
      <div className="p-2">
        <h3 className="text-xl font-semibold ml-4 mt-4">Cart</h3>
        {products.map((product) => {
          return (
            <CardProduct key={product.id}>
              <div className="flex w-full gap-4">
                <div className="w-2/5">
                  <CardProduct.Image src={product.image} />
                </div>
                <div className="w-3/5">
                  <CardProduct.Description>
                    <CardProduct.Title
                      title={product.title}
                      classname="mt-4 mb-6"
                    />
                  </CardProduct.Description>
                  <div className="flex gap-4">
                    <CardProduct.Price price={product.price} />
                    <Counter classname="gap-2" />
                  </div>
                </div>
              </div>
            </CardProduct>
          );
        })}
      </div>
    </div>
  );
};

export default CartLayouts;
