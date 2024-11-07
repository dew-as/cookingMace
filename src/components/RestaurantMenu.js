import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useResmenu from "../utils/useResmenu";
import MenuCard from "./MenuCard";
import MenuCategory from "./MenuCategory";
import ResOffer from "./ResOffer";
import { CDN_URL } from "../utils/constants";
import { checkAuth } from "./auth/checkAuth";

const RestaurantMenu = () => {
  const [resData, setResData] = useState([]);
  const [resInfo, setResInfo] = useState([]);
  const [resOffer, setResOffer] = useState([]);
  const [isVeg, setIsVeg] = useState(false);
  const [filterData, setFilterData] = useState([]);
  let veg = [];

  const data = "dummy data";

  const [showIndex, setShowIndex] = useState(null);

  const params = useParams();

  const resMenuData = useResmenu(params);

  useEffect(() => {
    if (resMenuData) {
      const resDetails = resMenuData?.cards[2]?.card?.card?.info;
      setResInfo(resDetails);
      const dataMenu =
        resMenuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
      const filteredMenu = dataMenu.filter(
        (item) =>
          item?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
      setResData(filteredMenu);
      const offers =
        resMenuData?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers;
      if (offers.length > 4) {
        offers.length = 4;
      }
      setResOffer(offers);
    }
  }, [resMenuData]);

  if (resMenuData === null) {
    return <Shimmer />;
  }

  const {
    cloudinaryImageId,
    areaName,
    avgRating,
    city,
    costForTwoMessage,
    cuisines,
    name,
    totalRatingsString,
    sla,
  } = resInfo;

  return (
    <div className="menu-container">
      <div className="res-details">
        <div className="res-head">
          <p>
            Home/{city}/{name}
          </p>
        </div>
        <div className="res-info">
          <div>
            <h1 className="res-name font-semibold">{name}</h1>
            <p className="common-gray">{cuisines?.join(" ,")}</p>
            <p className="common-gray">
              {areaName}, {sla?.lastMileTravelString}
            </p>
            <br />
            <p className="common-gray">
              <i className="bx bx-trip"></i>{" "}
              <span>{sla?.lastMileTravelString}</span> | <span>🏍️</span>{" "}
              {sla?.lastMileTravel >= 3
                ? "Far " +
                sla?.lastMileTravel +
                " kms | Delivery Charge will apply"
                : sla?.lastMileTravel + " kms only | Free Delivery Available"}
            </p>
            <p className="common-bold">
              <span>
                <i className="bx bxs-timer"></i> {sla?.slaString}
              </span>
              <span>
                <i className="bx bx-rupee"></i>
                {costForTwoMessage}
              </span>
            </p>
          </div>
          <div className="rating">
            <div className="star">
              <i className="bx bxs-star"></i>
              {avgRating}
            </div>
            <div className="count">{totalRatingsString}</div>
          </div>
        </div>
        <div className="xl:flex gap-1 mt-3 sm:block">
          {resOffer.map((offer) => (
            <ResOffer key={offer?.info?.offerIds[0]} offer={offer} />
          ))}
        </div>
      </div>
      <div className="menu-list">
        <div className="veg-filter">
          <span>Veg Only</span>
          <i
            onClick={() => {
              resData.map((cat) =>
                veg.push(
                  cat.card?.card?.itemCards.filter((item) =>
                    item?.card?.info?.itemAttribute?.vegClassifier === "VEG"
                      ? item.card
                      : ""
                  )
                )
              );
              setFilterData(...veg);
              setIsVeg((prev) => (prev === true ? false : true));
            }}
            className={`bx bx-food-tag ${isVeg ? "active" : ""}`}
          ></i>
          <span> {isVeg ? filterData.length : null}</span>
        </div>
        {isVeg
          ? filterData.map((item) => (
            <MenuCard key={item?.card?.info?.id} item={item} />
          ))
          : resData.map((category, index) => (
            <MenuCategory
              key={category?.card?.card?.title}
              category={category}
              showItem={index === showIndex ? true : false}
              setShowIndex={() =>
                setShowIndex(showIndex === index ? null : index)
              }
              data={data}
            />
          ))}
      </div>
    </div>
  );
};
export default checkAuth(RestaurantMenu);
