import SecondaryButton from "../Elements/Button/SecondaryButton";
import Counter from "../Elements/Counter";
import CardProduct from "../Fragments/CardProduct";

const ProductLayout = () => {
  return (
    <div className="flex flex-wrap w-full gap-4">
      <CardProduct>
        <div className="flex w-full">
          <div className="w-1/3">
            <CardProduct.Image />
          </div>
          <div className="w-2/3 flex flex-col py-2 px-4">
            <CardProduct.Description>
              <CardProduct.Title />
              <CardProduct.Price />
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
      <CardProduct>
        <div className="flex w-full">
          <div className="w-1/3">
            <CardProduct.Image />
          </div>
          <div className="w-2/3 flex flex-col py-2 px-4">
            <CardProduct.Description>
              <CardProduct.Title />
              <CardProduct.Price />
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
    </div>
  );
};

export default ProductLayout;
