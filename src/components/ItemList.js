import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
	// console.log(items);
	const dispatch = useDispatch();
	const handleAddItem = (item) => {
		// dispatch an action
		dispatch(addItem(item));
	};
	return (
		<div>
			{items.map((item) => (
				<div
					key={item.card.info.id}
					className="p-2 m-2 border-b-[1.5px] border-gray-200 text-left flex justify-between"
				>
					<div className="w-9/12">
						<div className="py-2">
							<span>{item.card.info.name}</span>{" "}
							<span>
								₹{" "}
								{item.card.info.price
									? item.card.info.price / 100
									: item.card.info.defaultPrice / 100}
							</span>
						</div>
						<p className="text-xs">{item.card.info?.description}</p>
					</div>
					<div className="w-3/12 p-4">
						<div className="absolute">
							<button
								className="bg-gray-800 text-white py-1 px-2 mx-20 my-10 rounded-lg shadow-lg"
								onClick={() => handleAddItem(item)}
							>
								Add +
							</button>
						</div>
						<img src={CDN_URL + item.card.info.imageId} />
					</div>
				</div>
			))}
		</div>
	);
};

export default ItemList;
