import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
	//Local State Variable - using hooks ---- hook is a normal JS function provided by hooks
	const [listOfRestaurants, setListOfRestaurants] = useState([]);
	const [filteredRestaurants, setFilteredRestaurants] = useState([]);
	const [searchText, setSearchText] = useState("");

	const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

	// console.log(listOfRestaurants);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const data = await fetch(
			"https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4594965&lng=77.0266383&page_type=DESKTOP_WEB_LISTING"
		);
		// console.log(data);
		const json = await data.json();
		// console.log(json);
		//Optional Chaining
		setListOfRestaurants(
			json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
		);
		setFilteredRestaurants(
			json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
		);
	};

	const onlineStatus = useOnlineStatus();
	if (!onlineStatus) {
		return <h1>You are offline!!</h1>;
	}

	const { loggedInUser, setUserName } = useContext(UserContext);
	return listOfRestaurants?.length === 0 ||
		filteredRestaurants?.length === 0 ? (
		<Shimmer />
	) : (
		<div className="body">
			<div className="filter flex">
				<div className="search m-4 p-4">
					<input
						data-testid="search-input"
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
								res.info.name.toLowerCase().includes(searchText.toLowerCase())
							);
							setFilteredRestaurants(filteredList);
						}}
					>
						Search
					</button>
				</div>
				<div className="m-4 p-4 flex items-center">
					<button
						className="px-4 py-2 bg-gray-100 rounded-lg"
						onClick={() => {
							//filter logic
							const filteredList = filteredRestaurants.filter(
								(res) => res.info.avgRating > 4.2
							);
							setFilteredRestaurants(filteredList);
						}}
					>
						Top Rated Restaurants
					</button>
					<button
						className="px-4 py-2 bg-gray-100 rounded-lg mx-4"
						onClick={() => setFilteredRestaurants(listOfRestaurants)}
					>
						Reset
					</button>
				</div>
				{/*  Username div  */}
				{/* <div className="search m-4 p-4 flex items-center">
					<label>UserName: </label>
					<input
						className="border border-black p-2"
						type="text"
						value={loggedInUser}
						onChange={(e) => {
							setUserName(e.target.value);
						}}
					/>
				</div> */}
			</div>
			<div className="res-container flex flex-wrap">
				{filteredRestaurants.map((restaurant) => (
					<Link
						key={restaurant?.info?.id}
						to={"/restaurants/" + restaurant?.info.id}
					>
						{restaurant?.info?.promoted ? (
							<RestaurantCardPromoted resData={restaurant?.info} />
						) : (
							<RestaurantCard resData={restaurant?.info} />
						)}
					</Link>
				))}
			</div>
		</div>
	);
};
export default Body;
