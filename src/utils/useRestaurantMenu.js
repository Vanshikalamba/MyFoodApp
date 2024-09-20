import { useEffect, useState } from "react";
import { MENU_API } from "./constants";
const useRestaurantMenu = (resId) => {
  const [resMenu, setresMenu] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const jsonMenu = await data.json();
    // const menuData = jsonMenu?.data?.cards[2]?.card?.card?.info;
    //console.log(jsonMenu);
    setresMenu(jsonMenu.data);
  };
  return resMenu;
};

export default useRestaurantMenu;
