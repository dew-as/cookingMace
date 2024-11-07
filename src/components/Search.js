import { useEffect, useState } from "react";
import { CDN_URL } from "../utils/constants";
import SearchShimmer from "./SearchShimmer";
import { checkAuth } from "./auth/checkAuth";

const Search = () => {
  const [cuisines, setCuisines] = useState([]);

  const [inputData, setInputData] = useState();

  const [filteredCuisines, setFilteredCuisines] = useState([]);

  const [filterRestaurant, setFilterRestaurant] = useState([]);

  const [listOffRestaurants, setListOffRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=8.490872999999999&lng=76.9527483&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    const resData = json?.data?.cards[0]?.card?.card?.imageGridCards?.info;
    setCuisines(resData);
    setFilteredCuisines(resData);
    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOffRestaurants(restaurants);
    setFilterRestaurant(restaurants);
  };

  if (listOffRestaurants.length === 0 && cuisines.length === 0) {
    return <SearchShimmer />;
  }

  return (
    <div className="search-container">
      <div className="input-container">
        <input
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              const filteredList = cuisines.filter((cuisine) =>
                cuisine?.action?.text
                  .toLowerCase()
                  .includes(inputData.toLowerCase())
              );
              setFilteredCuisines(filteredList);
              const filteredRes = listOffRestaurants.filter((restaurant) =>
                restaurant.info.name
                  .toLowerCase()
                  .includes(inputData.toLowerCase())
              );
              setFilterRestaurant(filteredRes);
            }
          }}
          placeholder="Search for restaurants and foods"
        ></input>
        <i
          onClick={() => {
            const filteredList = cuisines.filter((cuisine) =>
              cuisine?.action?.text
                .toLowerCase()
                .includes(inputData.toLowerCase())
            );
            setFilteredCuisines(filteredList);
            const filteredRes = listOffRestaurants.filter((restaurant) =>
              restaurant.info.name
                .toLowerCase()
                .includes(inputData.toLowerCase())
            );
            setFilterRestaurant(filteredRes);
          }}
          className="bx bx-search"
        ></i>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4 w-full">
        {filteredCuisines?.map((cuisine) => (
          <div
            key={cuisine?.id}
            className="flex items-center relative p-4 w-full bg-white rounded-lg overflow-hidden shadow hover:shadow-md"
          >
            <div className="w-12 h-12 rounded-full bg-gray-100">
              <img
                className="w-12 h-12 rounded-full"
                src={CDN_URL + cuisine?.imageId}
                alt="res-logo"
              />
            </div>
            <div className="ml-3">
              <p className="font-medium text-gray-800">
                {cuisine?.action?.text}
              </p>
              <p className="text-sm text-gray-600">Dish</p>
            </div>
          </div>
        ))}
        {filterRestaurant?.map((restaurant) => (
          <div
            key={restaurant?.info?.id}
            className="flex items-center relative p-4 w-full bg-white rounded-lg overflow-hidden shadow hover:shadow-md"
          >
            <div className="w-12 h-12 rounded-full bg-gray-100">
              <img
                className="w-12 h-12 rounded-full"
                src={CDN_URL + restaurant?.info?.cloudinaryImageId}
                alt="res-logo"
              />
            </div>
            <div className="ml-3">
              <p className="font-medium text-gray-800">
                {restaurant?.info?.name}
              </p>
              <p className="text-sm text-gray-600">restaurant</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default checkAuth(Search);