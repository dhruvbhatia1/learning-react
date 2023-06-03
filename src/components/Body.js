import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
	//Local State Variable - using hooks ---- hook is a normal JS function provided by hooks
	const [listOfRestaurants, setListOfRestaurants] = useState([]);
	const [filteredRestaurants, setFilteredRestaurants] = useState([]);
	const [searchText, setSearchText] = useState("");

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const data = await fetch(
			"https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4594965&lng=77.0266383&page_type=DESKTOP_WEB_LISTING"
		);
		const json = await data.json();
		console.log(json);
		//Optional Chaining
		setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
		setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
	};

	return listOfRestaurants.length === 0 ? (
		<Shimmer />
	) : (
		<div className="body">
			<div className="filter">
				<div className="search">
					<input
						type="text"
						placeholder="Search Restaurants"
						value={searchText}
						onChange={(event) => {
							setSearchText(event.target.value);
						}}
						className="search-box"
					/>
					<button
						onClick={() => {
							let filteredList = listOfRestaurants.filter((res) =>
								res.data.name.toLowerCase().includes(searchText.toLowerCase())
							);
							setFilteredRestaurants(filteredList);
						}}
					>
						Search
					</button>
				</div>
				<button
					className="filter-btn"
					onClick={() => {
						//filter logic
						filteredList = filteredRestaurants.filter(
							(res) => res.data.avgRating > 4
						);
						setFilteredRestaurants(filteredList);
					}}
				>
					Top Rated Restaurants
				</button>
			</div>
			<div className="res-container">
				{filteredRestaurants.map((restaurant) => (
					<RestaurantCard key={restaurant.data.id} resData={restaurant} />
				))}
			</div>
		</div>
	);
};
export default Body;
