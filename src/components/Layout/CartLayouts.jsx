import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import Counter from "../Elements/Counter";
import CardProduct from "../Fragments/CardProduct";
import NavbarUser from "../Fragments/NavbarUser";
import SecondaryButton from "../Elements/Button/SecondaryButton";
import { formatUSDCurrency } from "../../utils/utils";
import { AiOutlineRightCircle } from "react-icons/ai";
import {
  handleCartCounter,
  handleRemoveProduct,
} from "../../redux/slice/cartSlice";

const CartLayouts = () => {
  const dispatch = useDispatch();

  const [totalPrice, setTotalPrice] = useState(0);
  const products = useSelector((state) => state.cart.data);

  useEffect(() => {
    const total = products.reduce(
      (acc, curr) => acc + curr.price * curr.quantity,
      0
    );
    setTotalPrice(total);
  }, [products]);

  const onClickCounter = (type, id) => [
    dispatch(handleCartCounter({ type, id })),
  ];

  return (
    <div className="w-1/5 bg-ternary relative">
      <NavbarUser />
      <div className="py-2 overflow-y-scroll">
        <h3 className="text-xl font-semibold ml-4 mt-4">Cart</h3>
        {products.length > 0 &&
          products.map((product) => {
            return (
              <CardProduct key={product.id}>
                <div className="flex w-full gap-4 relative">
                  <div className="w-2/5">
                    <CardProduct.Image src={product.image} />
                  </div>
                  <div className="w-3/5">
                    <div className="absolute top-0 right-0">
                      <CardProduct.DeleteIcon
                        onClick={() =>
                          dispatch(handleRemoveProduct(product.id))
                        }
                      />
                    </div>
                    <div className="pt-8">
                      <CardProduct.Title title={product.title} classname="" />
                    </div>
                    <div className="flex gap-4 absolute bottom-3">
                      <CardProduct.Price
                        price={product.price * product.quantity}
                      />
                      <Counter
                        id={product.id}
                        classname="gap-2"
                        value={product.quantity}
                        handleCounter={onClickCounter}
                      />
                    </div>
                  </div>
                </div>
              </CardProduct>
            );
          })}
      </div>
      <div className="w-full py-4 flex items-center justify-around absolute bottom-0 border-t-2 border-t-slate-200 bg-ternary gap-4">
        <span className="text-primary font-semibold text-xl">
          {formatUSDCurrency(totalPrice)}
        </span>
        <SecondaryButton
          classname="w-1/2 rounded-md flex items-center justify-center gap-2"
          disabled={totalPrice === 0}
        >
          <span>Checkout</span>
          <AiOutlineRightCircle size={25} />
        </SecondaryButton>
      </div>
    </div>
  );
};

export default CartLayouts;
