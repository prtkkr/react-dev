import { IMG_URL } from "../utils/constants";

export const RestaurentCard = (props) => {
  const { avgRating, cloudinaryImageId, costForTwo, cuisines, id, name, sla } =
    props?.resDetail?.info;

  return (
    <div className="res-card">
      <div className="res-logo-container">
        <img
          className="res-logo"
          alt={name}
          src={`${IMG_URL}/${cloudinaryImageId}`}
        />
      </div>
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>⭐ {avgRating}</h5>
      <h5>🛵 {sla?.deliveryTime} minutes</h5>
      <h5>💳 {costForTwo}</h5>
    </div>
  );
};

export default RestaurentCard;
