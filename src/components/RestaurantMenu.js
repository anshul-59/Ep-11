import { useParams } from "react-router-dom";

import Shimmer from "./Shimmer.js";
import useFetchResMenu from "../utils/useRestaurantMenu.js";
import RestaurantCategory from "./RestaurantCategory.js";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useFetchResMenu(resId);

  if (resInfo === null) return <Shimmer />;
  console.log(resId);

  const name = resInfo?.cards[0]?.card?.card?.info?.name || "";
  const cuisines = resInfo?.cards[0]?.card?.card?.info?.cuisines || "";
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-16 text-2xl">{name}</h1>
      <p className="font-semibold text-lg ">{cuisines}</p>
      <h1 className="font-bold text-xl">Menu</h1>

      {categories.map((category) => (
        <RestaurantCategory data={category?.card?.card} />
      ))}

      <h2>
        {itemCards.map((item) => {
          return <li key={item.card.info.name}>{item.card.info.name}</li>;
        })}
      </h2>
    </div>
  );
};

export default RestaurantMenu;
