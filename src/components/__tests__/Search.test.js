import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
	return Promise.resolve({
		json: () => {
			return Promise.resolve(MOCK_DATA);
		},
	});
});

it("should search ResList", async () => {
	await act(async () => {
		return render(
			<BrowserRouter>
				<Body />
			</BrowserRouter>
		);
	});

    const searchButton = screen.getByRole("button", { name: "Search" });

	const searchInput = screen.getByTestId("search-input");
	fireEvent.change(searchInput, {target: {value: "subway"}});
	fireEvent.click(searchButton);

    // screen should load 1 card
	const cards = screen.getAllByTestId("resCard");
	expect(cards.length).toBe(1);
});

it("should filter top rated restaurants",async () => {
	await act(async ()=>{
		return render(
			<BrowserRouter>
				<Body />
			</BrowserRouter>
		);
	})

	const cardsBeforeFilter = screen.getAllByTestId("resCard");
	const filterButton = screen.getByText("Top Rated Restaurants");
	fireEvent.click(filterButton);
	const cards = screen.getAllByTestId("resCard");
	expect(cards.length).toBeLessThan(cardsBeforeFilter.length);
});