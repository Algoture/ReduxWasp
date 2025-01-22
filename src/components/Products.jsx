import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useDispatch } from "react-redux";
import { add } from "../app/cartSlice";

const Products = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch(import.meta.env.VITE_API_URL);
      const data = await response.json();
      setData(data);
      setLoading(false);
      // console.log(data)
    } catch (error) {
      console.error("Error:", error);
    }
  };
  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="mt-14 rounded-md h-12 w-12 border-4 border-t-4  border-gray-900 animate-spin absolute"></div>
      </div>
    );
  return (
    <div className="pt-14 grid grid-cols-4 gap-2">
      {data.map((item) => {
        return (
          <ProductCard
            key={item.id}
            item={item}
            cart={false}
            onAddToCart={(product) => dispatch(add(product))}
          />
        );
      })}
    </div>
  );
};

export default Products;
