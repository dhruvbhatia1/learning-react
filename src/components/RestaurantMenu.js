import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
	const { resId } = useParams();

	const resInfo = useRestaurantMenu(resId);

	const { name, cuisines, costForTwoMessage } =
		resInfo?.cards[0]?.card?.card?.info || {};

	const { itemCards } =
		resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
			?.card || {};

	return resInfo === null ? (
		<Shimmer />
	) : (
		<div className="menu text-center">
			<h1 className="font-bold text-2xl ">{name}</h1>
			<h3 className="font-semibold text-lg ">{cuisines.join(", ")}</h3>
			<h3 className="font-semibold text-lg">{costForTwoMessage}</h3>
			<h2>Menu</h2>
			<ul>
				{itemCards.map((item) => (
					<li key={item.card.info.id}>
						{item.card.info.name} - Rs.{" "}
						{item.card.info.price / 100 || item.card.info.defaultPrice / 100}
					</li>
				))}
			</ul>
		</div>
	);
};

export default RestaurantMenu;
