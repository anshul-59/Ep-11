import { useParams } from "react-router-dom";

import Shimmer from "./Shimmer.js";
import useFetchResMenu from "../utils/useRestaurantMenu.js";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useFetchResMenu(resId);

  if (resInfo === null) return <Shimmer />;
  console.log(resId);

  const name = resInfo?.cards[0]?.card?.card?.info?.name || "";
  const cuisines = resInfo?.cards[0]?.card?.card?.info?.cuisines || "";
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{cuisines}</h2>
      <h1>Menu</h1>
      <h2>
        {itemCards.map((item) => {
          return <li key={item.card.info.name}>{item.card.info.name}</li>;
        })}
      </h2>
    </div>
  );
};

export default RestaurantMenu;
