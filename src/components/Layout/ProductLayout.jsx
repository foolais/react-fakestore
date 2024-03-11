import shoes from "../../../public/images/shoes";
import { FaPlus, FaMinus } from "react-icons/fa";
import ButtonWithBorder from "../Elements/Button/ButtonWithBorder";

const ProductLayout = () => {
  return (
    <div className="flex flex-shrink-0 w-full">
      <div className="bg-ternary rounded-md p-4 w-1/2">
        {/*  */}
        <div className="flex w-full">
          {/* gambar */}
          <div className="w-1/3">
            <img
              src={shoes}
              alt="shoes"
              className="w-full min-h-40 h-full object-cover object-center rounded-lg"
            />
          </div>
          {/* deskripsi */}
          <div className="w-2/3 flex flex-col py-2 px-4">
            <div className="flex gap-6 font-semibold mb-2">
              <h3>Coffe Latte</h3>
              <span className="text-primary">$ 14.00</span>
            </div>
            <div className="w-10/12">
              <p className="text-sm text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officia, corporis!
              </p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="flex">
          {/* counter */}
          <div className="flex items-center justify-center gap-4 w-1/3">
            <div className="text-secondary border border-slate-400 rounded-full h-max p-2 cursor-pointer hover:bg-secondary hover:text-ternary transition duration-150 ease-in-out">
              <FaMinus size="10" />
            </div>
            <span>1</span>
            <div className="text-secondary border border-slate-400 rounded-full h-max p-2 cursor-pointer hover:bg-secondary hover:text-ternary transition duration-150 ease-in-out">
              <FaPlus size="10" />
            </div>
          </div>
          {/* add to cart */}
          <div className="w-2/3">
            <ButtonWithBorder classname="w-10/12 rounded-2xl">
              Add to Cart
            </ButtonWithBorder>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductLayout;
