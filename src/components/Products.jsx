import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Products = () => {
 const [data, setData] = useState([]);
 const [loading, setLoading] = useState(true);
 useEffect(() => {
  fetchData();
 }, []);
 const fetchData = async () => {
  try {
   const response = await fetch("https://fakestoreapi.com/products");
   const data = await response.json();
   console.log(data);
   setData(data);
   setLoading(false);
  } catch (error) {
   console.error("Error:", error);
  }
 };
 if (loading) return <h1>Loading...</h1>;
 return (
  <div className="pt-14 grid grid-cols-4 gap-2">
   {data.slice(0, 8).map((item) => {
    return <ProductCard item={item} />;
   })}
  </div>
 );
};

export default Products;
