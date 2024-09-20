import React, { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const resMenu = useRestaurantMenu(resId);
  //console.log(resMenu);
  const [showIndex, setShowIndex] = useState(null);

  if (resMenu === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resMenu?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  //console.log(itemCards);

  const categories =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  //console.log(categories);

  const handleAccordian = (index) => {
    setShowIndex((prev) => (prev == index ? null : index));
  };

  return (
    <div className="menu  text-center">
      <h1 className="font-bold my-5 text-2xl italic">{name}</h1>
      <p className="font-bold text-lg">{cuisines.join(",")}</p>
      {categories.map((cat, index) => (
        //controlled
        <RestaurantCategory
          key={cat?.card?.card?.title}
          data={cat?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() =>
            setShowIndex((prev) => (prev == index ? null : index))
          }
        />
      ))}
      {/* <h5>{costForTwoMessage}</h5>
      <h3>Recommended Dishes</h3>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} :{" "}
            {item.card.info.defaultPrice / 100 ||
              item.card.info.finalPrice / 100 ||
              item.card.info.price / 100}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;
