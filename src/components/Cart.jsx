import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { remove } from "../app/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  function removeProduct(item) {
    return dispatch(remove(item));
  }
  const cart = useSelector((state) => state.cart);
  if (cart.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-3xl font-bold text-gray-900">Cart is Empty</h1>
      </div>
    );
    
  }
  return (
    <div className="pt-14">
      <div className="grid grid-cols-4 gap-2">
        {cart.map((item) => {
          return (
            <ProductCard
              key={item.id}
              item={item}
              onRemoveFromCart={(item)=>removeProduct(item)}
              cart={true}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
