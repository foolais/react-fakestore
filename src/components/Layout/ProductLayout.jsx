import SecondaryButton from "../Elements/Button/SecondaryButton";
import Counter from "../Elements/Counter";
import CardProduct from "../Fragments/CardProduct";
import { useDispatch, useSelector } from "react-redux";
import { handleAddToCart } from "../../redux/slice/cartSlice";
import {
  fetchProducts,
  getProductsData,
  getProductsStatus,
  getProductsError,
  handleProductCounter,
  resetProductCounter,
} from "../../redux/slice/productSlice";
import { useEffect } from "react";

const ProductLayout = () => {
  const dispatch = useDispatch();

  const products = useSelector(getProductsData);
  const productsStatus = useSelector(getProductsStatus);
  const productsError = useSelector(getProductsError);

  useEffect(() => {
    if (productsStatus === "idle") dispatch(fetchProducts());
  }, [productsStatus, dispatch]);

  const handleCounter = (type, id) => {
    dispatch(handleProductCounter({ type, id }));
  };

  const onAddCart = (product) => {
    try {
      dispatch(handleAddToCart(product));
    } catch (error) {
      console.warn(error);
    } finally {
      dispatch(resetProductCounter(product.id));
    }
  };

  if (productsStatus === "loading") {
    return <div>...loading</div>;
  } else if (productsStatus === "failed") {
    return <div>{productsError}</div>;
  }

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
                  <CardProduct.Description
                    description={`${product.description.substring(0, 200)}...`}
                  >
                    <CardProduct.Title
                      title={`${product.title.substring(0, 24)}...`}
                    />
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
                    onClick={() => onAddCart(product)}
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
