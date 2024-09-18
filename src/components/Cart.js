import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cart = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearFunction = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-left m-4 p-4">
      <h1 className="font-bold text-xl">Cart Items</h1>

      <div className="text-right">
        <button
          className=" p-2 m-2 bg-purple-300 rounded-lg"
          onClick={handleClearFunction}
        >
          Clear Cart
        </button>
      </div>
      <div className="w-5/12 m-2">
        {cart.length != 0 ? (
          <ItemList items={cart} />
        ) : (
          <div>
            <h2 className="text-3xl italic">
              No Items In Cart...Please Add :)
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
