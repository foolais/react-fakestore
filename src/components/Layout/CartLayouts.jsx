import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Counter from "../Elements/Counter";
import CardProduct from "../Fragments/CardProduct";
import NavbarUser from "../Fragments/NavbarUser";
import SecondaryButton from "../Elements/Button/SecondaryButton";
import { formatUSDCurrency } from "../../utils/utils";
import { AiOutlineRightCircle } from "react-icons/ai";

const CartLayouts = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const products = useSelector((state) => state.cart.data);

  useEffect(() => {
    const total = products.reduce(
      (acc, curr) => acc + curr.price * curr.quantity,
      0
    );
    setTotalPrice(total);
  }, [products]);

  return (
    <div className="w-1/5 bg-ternary relative">
      <NavbarUser />
      <div className="p-2 overflow-y-scroll">
        <h3 className="text-xl font-semibold ml-4 mt-4">Cart {totalPrice}</h3>
        {products.length > 0 &&
          products.map((product) => {
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
                      <CardProduct.Price
                        price={product.price * product.quantity}
                      />
                      <Counter classname="gap-2" value={product.quantity} />
                    </div>
                  </div>
                </div>
              </CardProduct>
            );
          })}
      </div>
      <div className="w-full h-16 flex items-center justify-around absolute bottom-0 border-t-2 border-t-slate-200 bg-ternary gap-4">
        <span className="text-primary font-semibold text-xl">
          {formatUSDCurrency(totalPrice)}
        </span>
        <SecondaryButton classname="w-1/2 rounded-md flex items-center justify-center gap-2">
          <span>Checkout</span>
          <AiOutlineRightCircle size={25} />
        </SecondaryButton>
      </div>
    </div>
  );
};

export default CartLayouts;
