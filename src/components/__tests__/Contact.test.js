import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";


// test() and it() are the same.
describe("Contact Us Page Test Case", () => {
	test("should load contact component", () => {
		render(<Contact />);

		// Query
		const heading = screen.getByRole("heading");

		// Assertion
		expect(heading).toBeInTheDocument();
	});

	test("Should load button inside contact component", () => {
		render(<Contact />);

		const button = screen.getByText("Submit");

		expect(button).toBeInTheDocument();
	});

	test("should load input name inside contact component", () => {
		render(<Contact />);

		const input = screen.getByPlaceholderText("Name");

		expect(input).toBeInTheDocument();
	});

	test("should load 2 input boxes inside contact component", () => {
		render(<Contact />);
		const inputBoxes = screen.getAllByRole("textbox");
		// console.log(inputBoxes.length);

		expect(inputBoxes.length).toBe(2);
	});
});
