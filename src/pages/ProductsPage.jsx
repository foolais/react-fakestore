import CartLayouts from "../components/Layout/CartLayouts";
import ContainerLayouts from "../components/Layout/ContainerLayouts";
import ProductLayout from "../components/Layout/ProductLayout";

const ProductsPage = () => {
  return (
    <ContainerLayouts>
      <ProductLayout />
      <CartLayouts />
    </ContainerLayouts>
  );
};

export default ProductsPage;
