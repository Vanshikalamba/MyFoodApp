import { useState } from "react";
import ItemList from "./ItemList";
import Shimmer from "./Shimmer";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  //console.log(data);
  //const [showItem, setShowItem] = useState(false);
  //   const handleAccordian = () => {
  //     setShowIndex();
  //   };
  return (
    <div>
      <div className="w-6/12 bg-gray-100 my-5 mx-auto p-4 shadow-lg  ">
        <div
          className="p-4 flex justify-between shadow-lg cursor-pointer"
          onClick={setShowIndex}
        >
          <span className="font-bold text-lg ">
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        <div>{showItems && <ItemList items={data.itemCards} />}</div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
