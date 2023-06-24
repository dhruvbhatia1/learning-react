import React, { useState, useEffect } from "react";

const User = () => {
  const [userInfo, setUserInfo] = useState({
    name: "Dhruv",
    location: "Gurgaon",
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://api.github.com/users/dhruvbhatia1");
      const json = await data.json();
      console.log(json);
      setUserInfo(json);
    };

    fetchData();
  }, []);

  return (
    <div className="user-card">
      <h2>Name: {userInfo.name}</h2>
      <h3>Location: {userInfo.location}</h3>
      <h4>Contact @dhruvbhatia1</h4>
    </div>
  );
};

export default User;
