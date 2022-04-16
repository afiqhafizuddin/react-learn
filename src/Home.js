const Home = () => {
  const handleClick = () => {
    console.log("hello, ninjas");
  };

  const clickAgain = (name) => {
    console.log(`hello ${name}`);
  };
  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click Me!</button>
      <button onClick={() => clickAgain("afiq")}>Click Again</button>
    </div>
  );
};

export default Home;
