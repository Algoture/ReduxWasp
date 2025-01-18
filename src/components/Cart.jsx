import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div className="pt-14">
      <div className="grid grid-cols-4 gap-2">
        {cart.map((item) => {
          return <ProductCard key={item.id} item={item} cart={true}/>;
        })}
      </div>
    </div>
  );
};

export default Cart;
