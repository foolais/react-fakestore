import Title from "../components/Elements/Title";
import ProductLayout from "../components/Layout/ProductLayout";

const HomePage = () => {
  return (
    <div className="w-full min-h-screen flex bg-primary">
      <div className="w-1/5 min-h-screen bg-ternary p-4">
        <Title classname="text-3xl" />
      </div>
      <div className="w-3/5 bg-gray-300 p-4">
        <ProductLayout />
      </div>
      <div className="w-1/5 p-4">Chart</div>
    </div>
  );
};

export default HomePage;
