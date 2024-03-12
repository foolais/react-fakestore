import ProductLayout from "../components/Layout/ProductLayout";
import ChartLayouts from "../components/Layout/ChartLayouts";
import Sidenav from "../components/Fragments/Sidenav";

const HomePage = () => {
  return (
    <div className="w-full min-h-screen flex relative">
      <Sidenav />
      <div className="w-1/6"></div>
      <ProductLayout />
      <ChartLayouts />
    </div>
  );
};

export default HomePage;
