import ItemList from "./itemList";

const RestaurantCategory = ({ data }) => {
  console.log(data);
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-200 shadow-lg p-4 rounded-md ">
        <div className="flex justify-between">
          <span className="font-semibold text-md">
            {data.title} ({data.itemCards.length})
          </span>
          <span>^</span>{" "}
        </div>

        <ItemList items={data.itemCards} />
      </div>
    </div>
  );
};

export default RestaurantCategory;
