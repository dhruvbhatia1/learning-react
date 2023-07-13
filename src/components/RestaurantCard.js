import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
	const { resData } = props;
	const {
		cloudinaryImageId,
		name,
		cuisines,
		avgRating,
		costForTwo,
		deliveryTime,
	} = resData?.data;
	return (
		<div className="res-card m-4 p-4 w-64 bg-gray-100 hover:bg-gray-200">
			<img
				className="res-logo rounded-lg"
				src={
					CDN_URL +
					cloudinaryImageId
				}
			/>
			<h2 className="font-bold py-4 ">{name}</h2>
			<h4>{cuisines.join(", ")}</h4>
			<h4>{avgRating} stars</h4>
			<h4>₹{costForTwo / 100} FOR TWO</h4>
			<h4>{deliveryTime} minutes</h4>
			
		</div>
	);
};

// Higher Order Component
// input - Restaurant Card => output - Restaurant Card with Promoted Label

export const withPromotedLabel = (RestaurantCard) => {

	return (props) => {
		return (
			<div className>
				<label className="absolute bg-black text-white m-2 p-2 rounded-lg text-sm">Promoted</label>
				<RestaurantCard {...props}/>
			</div>
		)
	}
}

export default RestaurantCard;