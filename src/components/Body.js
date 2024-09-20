import RestaurantCard, { withpromoted } from "./RestaurantCard";
import resList from "../utils/mockdata";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import Sorting from "./Sorting";
const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchedRes, setSearchedRes] = useState([]);

  //console.log(listOfRes);
  //if (listOfRes.length === 0) return <Shimmer />;
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    //console.log(jsonData);
    setListOfRes(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setSearchedRes(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  const RestaurantCardPromoted = withpromoted(RestaurantCard);
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <h1>Looks Like you are Offline</h1>;
  const { setLoggedName, loggedInUser } = useContext(UserContext);

  return listOfRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex  items-center m-4">
        <div className="search  p-4">
          <input
            type="text"
            data-testid="searchInput"
            className="search-box border border-solid border-black p-1 rounded-md w-60"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-purple-200 m-4 rounded-lg active:bg-purple-400"
            onClick={() => {
              //filter cards and update UI
              //searchText

              const searchresult = listOfRes.filter((res) =>
                res.info.name.toLowerCase().includes(searchText)
              );
              setSearchedRes(searchresult);
            }}
          >
            Search
          </button>
        </div>
        <div className="p-4">
          <button
            className="filter-btn px-4 py-2 bg-purple-200 rounded-lg hover:bg-purple-400"
            onClick={() => {
              const filteredList = listOfRes.filter(
                (res) => res.info.avgRating > 4
              );
              setSearchedRes(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
        <div className="p-4">
          <button
            className="filter-btn px-4 py-2 bg-purple-200 rounded-lg hover:bg-purple-400"
            onClick={() => {
              setSearchedRes(listOfRes);
            }}
          >
            All Restaurant
          </button>
        </div>

        {/* <div>
          <span className="mx-2">UserName</span>
          <input
            value={loggedInUser}
            onChange={(e) => {
              setLoggedName(e.target.value);
            }}
            className="search-box border border-solid border-black p-1 rounded-md w-60"
          />
        </div> */}
      </div>
      <div className="filter flex items-center m-4">
        <div className="flex justify-start mx-3 p-4  flex-auto">
          <div className="mx-3">
            <button
              className="cursor-pointer bg-black text-white p-2 rounded-lg"
              onClick={() => {
                let sortedres = listOfRes;
                sortedres.sort((a, b) => {
                  a.info.sla.deliveryTime > b.info.sla.deliveryTime ? 1 : -1;
                });
                setSearchedRes(sortedres);
              }}
            >
              Delivery Time⏰
            </button>
          </div>
          <div className="mx-3">
            <button className="cursor-pointer bg-black text-white p-2 rounded-lg">
              Distance🔀
            </button>
          </div>
          <div className="mx-3">
            <button
              className="cursor-pointer bg-black text-white p-2 rounded-lg"
              onClick={() => {
                let sortedres = listOfRes;
                sortedres = listOfRes.sort((a, b) => {
                  a.info.avgRating > b.info.avgRating ? 1 : -1;
                });
                setSearchedRes(sortedres);
              }}
            >
              Rating
            </button>
          </div>
        </div>
      </div>
      <div className="res-container flex justify-center flex-wrap">
        {searchedRes.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant.info.id}
            key={restaurant.info.id}
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            {restaurant.info.promoted ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
