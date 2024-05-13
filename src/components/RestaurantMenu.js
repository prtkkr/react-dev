import { useEffect, useState } from "react";
import { IMG_URL, RESTAURANT_MENU_URL } from "../utils/constants";
import ShimmerMenu from "./ShimmerMenu";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(`${RESTAURANT_MENU_URL}${id}`);
    const json = await data.json();

    setResInfo(json.data);
  };

  if (resInfo === null || undefined) {
    return <ShimmerMenu />;
  }

  const { name, cuisines, locality, city, logo, cloudinaryImageId } =
    resInfo?.cards[2]?.card?.card?.info;

  const itemCards =
      resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
        ?.itemCards ||
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[9]?.card?.card
      ?.itemCards ||
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card
      ?.itemCards;

  return (
    <div className="res-menu-container">
      <div className="res-header">
        <div>
          <h1>{name}</h1>
          <p>{cuisines.join(", ")}</p>
          <p>{`${locality}, ${city}`}</p>
        </div>
        <div style={{ borderRadius: "50%", overflow: "hidden" }}>
          <img
            src={`${IMG_URL}/${logo}`}
            style={{ width: "150px" }}
            alt={name}
          />
        </div>
      </div>
      <hr />
      <p>
        <strong>Menu</strong>
      </p>
      {itemCards.map((item) => {
        return (
          <div className="res-menu-item" key={item?.card?.info?.id}>
            <div>
              <p>{item?.card?.info?.name}</p>
              <p style={{ fontSize: "13px" }}>
                {item?.card?.info?.description}
              </p>
              <p>₹ {item?.card?.info?.price / 100}</p>
            </div>
            <div>
              <img
                alt="image"
                width="112px"
                src={`${IMG_URL}/${item?.card?.info?.imageId}`}
              ></img>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
