import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

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

	const onlineStatus = useOnlineStatus();
	if (!onlineStatus) {
		return <h1>You are offline!!</h1>;
	}

	return listOfRestaurants?.length === 0 ? (
		<Shimmer />
	) : (
		<div className="body">
			<div className="filter flex">
				<div className="search m-4 p-4">
					<input
						type="text"
						placeholder="Search Restaurants"
						value={searchText}
						onChange={(event) => {
							setSearchText(event.target.value);
						}}
						className="search-box border border-solid border-black"
					/>
					<button
						className="px-4 py-2 rounded-lg bg-green-100 m-4"
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
				<div className="search m-4 p-4 flex items-center">
					<button
						className="px-4 py-2 bg-gray-100 rounded-lg"
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
			</div>
			<div className="res-container flex flex-wrap">
				{filteredRestaurants.map((restaurant) => (
					<Link
						key={restaurant.data.id}
						to={"/restaurants/" + restaurant.data.id}
					>
						<RestaurantCard resData={restaurant} />
					</Link>
				))}
			</div>
		</div>
	);
};
export default Body;
