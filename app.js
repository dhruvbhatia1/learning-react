import React from "react";
import ReactDOM from "react-dom/client";

// React Element
//React.createElement => Object => After rendering -> HTML Element
// JSX - is not HTML in JS. It has an HTML-like or XML-like syntax
// JSX is transpiled before reaching the JS Engine. (converting to code that browsers can understand)->Parcel->Babel

const heading = <h1 className="heading">Hello World using JSX</h1>; // another way to create react Element (usingJSX)
console.log(heading);

// React Components
// 2 types - class based (Old way) and functional(New)

// Functional component - a function that returns a piece of JSX code
// const HeadingComponent = () => {
// 	return <h1>Functional Component</h1>;
// };
// same as

//Component composition - one component inside another
const subElement = <h2>Sub Element</h2>;
const SubComponent = () => <h1>Hello World</h1>;
const HeadingComponent = () => (
	<div className="container">
		<h1>Functional Component</h1>
		<SubComponent />
		{subElement}
	</div>
);
// React fragment - used to have 2 root level elements - behaves like an empty tag - can
const Component = () => (
	<React.Fragment> 
		{/* can also use <> and </> */}
		<div>
			<h1>Hello</h1>
		</div>
		<div>
			<h1>World </h1>
		</div>
	</React.Fragment>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Component />);
