import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("mario"); // reactive
  const [age, setAge] = useState(25);
  const handleClick = () => {
    setName("luigi");
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>
        {name} is {age} years old
      </p>
      <button onClick={handleClick}>Click Me!</button>
    </div>
  );
};

export default Home;
