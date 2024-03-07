import { CDN_URL } from "../utils/constants";

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = ({ resData }) => {
  const { name, cloudinaryImageId, areaName } = resData.info;

  return (
    <div
      className="h-full shadow-sm m-4 p-4 w-[200px] rounded-xl"
      style={styleCard}
    >
      <img
        className="rounded-lg h-40 w-52"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{areaName}</h4>
    </div>
  );
};

export const restaurantIsOpen = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 px-2 rounded-md">
          open
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
