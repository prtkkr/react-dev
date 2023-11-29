import { useEffect, useState } from "react";
import RestaurentCard from "./RestaurantCard";
import { SWIGGY_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchState, setSearchState] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_URL);
    const json = await data.json();
    let tempData =
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setRestaurantList(tempData);
    setFilteredRestaurant(tempData);
  };

  return restaurantList && restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="util-container">
        <button
          className="btn-top-filter"
          type="button"
          onClick={() => {
            let temp = restaurantList.filter((x) => x.info.avgRating > 4);
            setFilteredRestaurant(temp);
          }}
        >
          Top Rated Restaurant
        </button>
        <div className="search">
          <input
            type="search"
            className="search-input"
            placeholder="enter restaurant name"
            value={searchState}
            onChange={(e) => {
              setSearchState(e.target.value);
            }}
          />
          <button
            type="submit"
            className="btn-res-search"
            onClick={() => {
              let filteredList = restaurantList.filter((x) =>
                x.info.name.toLowerCase().includes(searchState.toLowerCase())
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Search
          </button>
        </div>
      </div>

      <div className="res-container">
        {filteredRestaurant.map((res) => {
          return <RestaurentCard key={res.info.id} resDetail={res} />;
        })}
      </div>
    </div>
  );
};

export default Body;
