import React from "react";
class UserClass extends React.Component {
	constructor(props) {
		super(props);

		this.state = {userInfo: {
			name: "Dhruv",
			location: "Gurgaon"
		}};
	}

	async componentDidMount() {
		const data = await fetch("https://api.github.com/users/dhruvbhatia1");
		const json = await data.json();

		console.log(json);
		this.setState({userInfo: json})
	}

	render() {
		const { name, location } = this.props;

		const { userInfo } = this.state;
		return (
			<div className="user-card">
				<h2>Name: {userInfo.name}</h2>
				<h3>Location: {userInfo.location}</h3>
				<h4>Contact @dhruvbhatia1</h4>
			</div>
		);
	}
}

export default UserClass;
