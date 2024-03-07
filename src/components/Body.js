import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <h1>Looks Like you are OFFLINE</h1>;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    const json = await data.json();

    setRestaurants(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );

    console.log(json);
  };

  const [searchText, setSearchText] = useState("");

  // Initialize state for the restaurant list and filtered list
  const [restaurants, setRestaurants] = useState([]); // resList
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  // Function to filter top-rated restaurants
  const filterTopRated = () => {
    const filteredRes = resList.filter((res) => res.info.avgRating > 4.5);
    setFilteredRestaurants(filteredRes);
  };

  const filterByName = () => {
    const filterName = restaurants.filter((res) => {
      return res.info.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setFilteredRestaurants(filterName);
  };

  if (restaurants.length === 0) {
    return <Shimmer />;
  }

  // Render the filtered or original restaurant list
  const renderRestaurants = () => {
    const listToRender =
      filteredRestaurants.length > 0 ? filteredRestaurants : restaurants;
    return listToRender.map((resData) => (
      <Link key={resData.info.id} to={"/restaurant/" + resData.info.id}>
        <RestaurantCard resData={resData} />
      </Link>
    ));
  };

  return (
    <div className="body">
      <div className="flex">
        <div className="search">
          <input
            type="text"
            className="m-4 rounded-sm border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="px-4 py-2 bg-green-200 m-4 justify-between rounded-lg items-center"
            onClick={filterByName}
          >
            search
          </button>
        </div>
        <button
          className="px-4 py-2 bg-green-200 m-4 justify-between rounded-lg items-center"
          onClick={filterTopRated}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className=" space-y-4 flex flex-wrap shadow-sm">
        {renderRestaurants()}
      </div>
    </div>
  );
};

export default Body;
// import RestaurantCard from "./RestaurantCard";

// import resList from "../utils/mockData";

// const Body = () => {
//   const [restaurants, setRestaurants] = useState(resList);
//   const [filteredRestaurants, setFilteredRestaurants] = useState([]);
//   return (
//     <div className="body">
//       <div className="filter">
//         <button
//           className="filter-btn"
//           onClick={() => {
//             topRes = topRes.filter((res) => res.info.avgRating > 4.5);
//           }}
//         >
//           Top Rated Restaurants
//         </button>
//       </div>
//       <div className="res-container">
//         {topRes.map((resData) => (
//           <RestaurantCard key={resData.info.id} resData={resData} />
//         ))}
//         {/* <RestaurantCard resData={resList[0]} /> */}
//       </div>
//     </div>
//   );
// };

// export default Body;

// // {resList.map((resData) => (
// //     <RestaurantCard key={resData.info.id} resData={resData} />
// //   ))}
