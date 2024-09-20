import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
const RestaurantCard = (props) => {
  const { resData } = props;
  //console.log(resData);

  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } =
    resData?.info;
  const { loggedInUser } = useContext(UserContext);

  return (
    <div
      data-testid="resCard"
      className=" resCard m-4  w-[12rem] h-[300px] rounded-lg bg-white-600 border border-purple-100  hover:bg-purple-200 cursor-pointer shadow-lg transition "
    >
      <div className="cardimage mb-0.5 ">
        <img
          className="res-logo border rounded-t-lg h-[150px] w-[12rem]"
          src={CDN_URL + cloudinaryImageId}
        ></img>
      </div>
      <div className="h-auto p-1">
        <div className="line-clamp-1 overflow-hidden text-ellipsis">
          <h3 className="font-bold py-2 text-md">{name}</h3>
        </div>

        <div className="line-clamp-1 overflow-hidden text-ellipsis">
          <h4 className=" text-xs">{cuisines.join(", ")}</h4>
        </div>
        <h4 className=" text-xs">{avgRating} 🌟</h4>
        <h4 className=" text-xs">{sla.deliveryTime} mins</h4>
        <h4 className=" text-xs">{costForTwo} mins</h4>
      </div>
    </div>
  );
};

export const withpromoted = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
