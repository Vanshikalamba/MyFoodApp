import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const ItemList = ({ items }) => {
  //console.log(items);
  const dispatch = useDispatch();
  const handleAddFunction = (item) => {
    dispatch(addItem(item));
    console.log(item);
  };
  return (
    <div>
      {items.map((it) => (
        <div
          key={it.card.info.id}
          className="p-2 m-2 border-b-2 border-gray-400  text-left"
        >
          <div>
            <div className="flex  justify-between items-center">
              <div className="p-4  font-bold">
                <p>{it.card.info.name}</p>
                <span>
                  ₹{" "}
                  {it.card.info.defaultPrice / 100 || it.card.info.price / 100}
                </span>
              </div>
              <div className="">
                <div className="absolute">
                  <button
                    className="px-2 mx-16 shadow-lg bg-black text-white border rounded-lg"
                    onClick={() => handleAddFunction(it)}
                  >
                    Add +
                  </button>
                </div>

                <img
                  className="w-[70px]"
                  src={CDN_URL + it.card.info.imageId}
                ></img>
              </div>
            </div>

            <p className="text-xs">{it.card.info.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
