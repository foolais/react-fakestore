import Title from "../components/Elements/Title";
import ProductLayout from "../components/Layout/ProductLayout";

const HomePage = () => {
  return (
    <div className="w-full min-h-screen flex bg-primary">
      <div className="w-1/6 min-h-screen bg-ternary p-4">
        <Title classname="text-3xl" />
      </div>
      <div className="w-2/3 bg-gray-300 p-4">
        <ProductLayout />
      </div>
      <div className="w-1/6 p-4">Chart</div>
    </div>
  );
};

export default HomePage;
