import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
	const { resId } = useParams();

	const resInfo = useRestaurantMenu(resId);

	const [showIndex, setShowIndex] = useState(null);

	const { name, cuisines, costForTwoMessage } =
		resInfo?.cards[0]?.card?.card?.info || {};

	const { itemCards } =
		resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
			?.card || {};

	// console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

	const categories =
		resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
			(c) =>
				c.card?.card?.["@type"] ===
				"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
		);
	// console.log(categories);
	return resInfo === null ? (
		<Shimmer />
	) : (
		<div className="menu text-center">
			<h1 className="font-bold my-6 text-2xl ">{name}</h1>
			<h3 className="font-semibold text-lg ">{cuisines.join(", ")}</h3>
			<h3 className="font-semibold text-lg">{costForTwoMessage}</h3>

			{categories.map((category, index) => {
				return (
					<RestaurantCategory
						key={category.card.card.title}
						data={category?.card?.card}
						showItems={index === showIndex ? true : false}
						setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
					/>
				);
			})}
		</div>
	);
};

export default RestaurantMenu;
