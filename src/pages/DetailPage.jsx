import { useSelector } from "react-redux";
import ContainerLayouts from "../components/Layout/ContainerLayouts";
import { useParams } from "react-router-dom";
import {
  fetchSingleProduct,
  getSingleProductData,
  getSingleProductStatus,
} from "../redux/slice/detailProductSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const DetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = useSelector(getSingleProductData);
  const productStatus = useSelector(getSingleProductStatus);

  useEffect(() => {
    if (productStatus === "idle") dispatch(fetchSingleProduct(id));
  }, [productStatus, dispatch, id]);

  console.log({ product });

  return (
    <ContainerLayouts>
      {productStatus === "loading" ? (
        <div>Loading...</div>
      ) : (
        <div className="p-4 w-[65%]">
          <ul>
            <li>
              <img
                src={product.image}
                alt="product"
                className="w-60 minh-60 max-h-60 object-cover object-top"
              />
            </li>
            <li>{product?.title}</li>
            <li>{product?.description}</li>
            <li>{product?.price}</li>
            <li>{product?.category}</li>
            <li>{product?.rating.rate}</li>
          </ul>
        </div>
      )}
    </ContainerLayouts>
  );
};

export default DetailPage;
