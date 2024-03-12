import ProductLayout from "../components/Layout/ProductLayout";
import CartLayouts from "../components/Layout/CartLayouts";
import Sidenav from "../components/Fragments/Sidenav";

const HomePage = () => {
  return (
    <div className="w-full min-h-screen flex relative">
      <Sidenav />
      <div className="w-[15%]"></div>
      <ProductLayout />
      <CartLayouts />
    </div>
  );
};

export default HomePage;
