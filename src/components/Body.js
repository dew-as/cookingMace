import RestaurantCard, { withPromoted } from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useNetworkStatus from "../utils/useNetworkStatus";
import noData from "../../public/AboutUs.gif";
import { UserContext } from "../utils/globalContext";
import { checkAuth } from "./auth/checkAuth";

const Body = () => {
  const [filterRestaurant, setFilterRestaurant] = useState([]);

  const [listOffRestaurants, setListOffRestaurants] = useState([]);

  const [inputData, setInputData] = useState(null);

  const RestaurantCardPromoted = withPromoted(RestaurantCard);

  const queryArray = [
    "Data lost in food frenzy! 🤷🏻‍♂️",
    "Hungry, not for data! 🤷🏻‍♂️",
    "Food beats data hunt! 🤷🏻‍♂️",
    "Eats over data quest! 🤷🏻‍♂️",
    "No data, just munchies! 🤷🏻‍♂️",
  ];

  function RandomQuery() {
    const randomIndex = Math.floor(Math.random() * queryArray.length);
    const randomQuery = queryArray[randomIndex];

    return (
      <div>
        <h1 className="font-semibold text-5xl font-mono">{randomQuery}</h1>
        <img className="w-4/12 m-auto" src={noData} />
      </div>
    );
  }

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=8.490872999999999&lng=76.9527483&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOffRestaurants(restaurants);
    setFilterRestaurant(restaurants);
  };
  let filteredList;

  const networkStatus = useNetworkStatus();

  if (networkStatus === false)
    return (
      <div className="flex items-center justify-center">
        <h1 className="font-semibold text-3xl">
          You'r Offline Now Please Check The Internet Connection ! 👀
        </h1>
      </div>
    );

  return listOffRestaurants.length === 0 && !inputData ? (
    <Shimmer />
  ) : (
    <div className="w-9/12 m-auto">
      {/* <span style={{ color: networkStatus ? "green" : "red" }}>
          {networkStatus ? "🍏- Online" : "🍎- Offline"}
        </span> */}
      <form className="flex items-center max-w-sm mx-auto mt-4">
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <i className="bx bx-restaurant w-4 h-4"></i>
          </div>
          <input
            type="text"
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-orange-500 block w-full ps-10 p-2.5 outline-none"
            placeholder="Search branch name..."
            required
            onChange={(e) => {
              setInputData(e.target.value);
              const filteredList = filterRestaurant.filter((restaurant) =>
                restaurant.info.name
                  .toLowerCase()
                  .includes(e.target.value.toLowerCase())
              );
              setListOffRestaurants(filteredList);
            }}
          />
        </div>
        <button
          type="submit"
          className="p-2.5 ms-2 text-sm font-medium text-white bg-orange-500 rounded-lg border border-orange-600 hover:bg-orange-400 outline-none"
        >
          <i className="bx bx-search w-4 h-4"></i>
          <span className="sr-only">Search</span>
        </button>
      </form>

      <div className="bg-white p-4 flex justify-center items-center flex-wrap">
        <span
          onClick={() => {
            setListOffRestaurants(filterRestaurant);
          }}
          className="inline-flex items-center cursor-pointer m-2 px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded-full text-sm font-semibold text-gray-600"
        >
          <svg
            className="w-4 h-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
          </svg>
          <span className="ml-1">All Restaurants</span>
        </span>
        <span
          onClick={() => {
            filteredList = filterRestaurant.filter(
              (restaurant) => restaurant.info.avgRating >= 4.5
            );
            setListOffRestaurants(filteredList);
          }}
          className="inline-flex cursor-pointer items-center m-2 px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded-full text-sm font-semibold text-gray-600"
        >
          <svg
            className="w-4 h-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
          </svg>
          <span className="ml-1">Top Rated</span>
        </span>
        <span
          onClick={() => {
            filteredList = filterRestaurant.filter(
              (restaurant) => restaurant.info.sla.deliveryTime < 25
            );
            setListOffRestaurants(filteredList);
          }}
          className="inline-flex items-center cursor-pointer m-2 px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded-full text-sm font-semibold text-gray-600"
        >
          <svg
            className="w-4 h-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
          </svg>
          <span className="ml-1">Fast Delivery</span>
        </span>
        <span
          onClick={() => {
            filteredList = filterRestaurant.filter(
              (restaurant) => restaurant.info.sla.lastMileTravel < 3
            );
            setListOffRestaurants(filteredList);
          }}
          className="inline-flex items-center cursor-pointer m-2 px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded-full text-sm font-semibold text-gray-600"
        >
          <svg
            className="w-4 h-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
          </svg>
          <span className="ml-1">Restaurants Nearby</span>
        </span>
        <span
          onClick={() => {
            filteredList = filterRestaurant.filter(
              (restaurant) => restaurant.info.sla.lastMileTravel < 2
            );
            setListOffRestaurants(filteredList);
          }}
          className="inline-flex cursor-pointer items-center m-2 px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded-full text-sm font-semibold text-gray-600"
        >
          <svg
            className="w-4 h-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
          </svg>
          <span className="ml-1">Free Delivery</span>
        </span>
      </div>
      <div className="flex gap-10 justify-around flex-wrap p-2 mt-8">
        {listOffRestaurants.length === 0
          ? RandomQuery()
          : listOffRestaurants?.map((restaurant) => (
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to={"/restaurants/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              {" "}
              {restaurant?.info?.veg ? (
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

export default checkAuth(Body);
